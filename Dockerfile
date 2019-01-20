# Python base image for build and production
FROM alpine:3.8 AS python

RUN apk add --no-cache python3 \
  libpq

# Build server
FROM python AS build-server

WORKDIR /werkstatt
RUN apk add --no-cache --virtual .build-deps \
  py3-pip \
  gcc \
  python3-dev \
  musl-dev \
  postgresql-dev
ADD requirements-dev.txt /werkstatt/
RUN pip3 install --no-cache-dir --requirement requirements-dev.txt
ADD requirements.txt /werkstatt/
RUN pip3 install --no-cache-dir --requirement requirements.txt --target requirements
RUN apk del --no-cache .build-deps

ADD server /werkstatt/server

# Build UI
FROM node:10-alpine AS build-ui

WORKDIR /werkstatt/ui
ADD ui/package.json ui/package-lock.json /werkstatt/ui/
RUN npm install
ADD ui /werkstatt/ui
RUN npm run-script build

# Build release image
FROM python

WORKDIR /usr/local/lib/werkstatt
EXPOSE 4000
ENV PYTHONPATH /usr/local/lib/werkstatt/requirements
CMD [ "requirements/bin/gunicorn", "-w", "4", "-b", "0.0.0.0:4000", "server:create_app()" ]

COPY --from=build-server /werkstatt/requirements /usr/local/lib/werkstatt/requirements
COPY --from=build-server /werkstatt/server /usr/local/lib/werkstatt/server
COPY --from=build-ui /werkstatt/ui/build /usr/local/lib/werkstatt/server/static
