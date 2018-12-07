import DashboardPage from './pages/dashboard'
import SketchpadPage from './pages/sketchpad'
import SketchpadListPage from './pages/sketchpad-list'
import NotMatchPage from './pages/not-match'

export default [
  {
    key: 'dashboard-page',
    path: '/',
    component: DashboardPage,
    exact: true
  },
  {
    key: 'sketchpad-list-page',
    path: '/sketchpad',
    component: SketchpadListPage,
    exact: true
  },
  {
    key: 'sketchpad-page',
    path: '/sketchpad/:id',
    component: SketchpadPage,
    exact: true
  },
  {
    key: 'not-match-page',
    component: NotMatchPage
  }
]
