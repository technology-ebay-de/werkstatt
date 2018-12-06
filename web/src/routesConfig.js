import Dashboard from './pages/dashboard'
import SketchPad from './pages/sketchpad'

export default [
  {
    key: 'dashboard',
    path: '/',
    component: Dashboard,
    exact: true
  },
  {
    key: 'sketchpad',
    path: '/sketchpad/:id',
    component: SketchPad,
    exact: true
  }
]
