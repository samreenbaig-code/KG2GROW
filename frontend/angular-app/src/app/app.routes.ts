import { Routes } from '@angular/router';


/* ============================= */
/* MAIN PAGES */
/* ============================= */

import { DashboardComponent }
from './pages/dashboard/dashboard.component';

import { HomeComponent }
from './pages/home/home.component';

import { LoginComponent }
from './pages/login/login.component';

import { AccountComponent }
from './pages/account/account.component';
import { RegisterComponent }
from './pages/register/register';

/* ============================= */
/* ABC GAME PAGES */
/* ============================= */

import { Abc }
from './pages/abc/abc.component';

import { AbcLevel1Component }
from './pages/abc-level1/abc-level1.component';

import { AbcLevel2Component }
from './pages/abc-level2/abc-level2.component';

import { AbcLevel3Component }
from './pages/abc-level3/abc-level3.component';

import { AbcLevel4Component }
from './pages/abc-level4/abc-level4.component';


/* ============================= */
/* NUMBER GAME PAGES */
/* ============================= */

import { NumberComponent }
from './pages/number/number/number.component';

import { NumberLevel1Component }
from './pages/number/number-level1/number-level1.component';

import { NumberLevel2Component }
from './pages/number/number-level2/number-level2.component';

import { NumberLevel3Component }
from './pages/number/number-level3/number-level3.component';

import { NumberLevel4Component }
from './pages/number/number-level4/number-level4.component';


/* ============================= */
/* SHAPE SAFARI PAGES */
/* ============================= */

import { ShapeSafariComponent }
from './pages/shape-safari/shape-safari.component';

import { ShapeLevel1Component }
from './pages/shape-safari/shape-level1/shape-level1.component';

import { ShapeLevel2Component }
from './pages/shape-safari/shape-level2/shape-level2.component';

import { ShapeLevel3Component }
from './pages/shape-safari/shape-level3/shape-level3.component';


/* ============================= */
/* COLOR GAME PAGES */
/* ============================= */

import { ColorComponent }
from './pages/color/color.component';

import { LearnColorsComponent }
from './pages/color/learn-colors/learn-colors.component';

import { FindColorComponent }
from './pages/color/find-color/find-color.component';

import { ColorMatchingComponent }
from './pages/color/color-matching/color-matching.component';


/* ============================= */
/* MEMORY GAME PAGES */
/* ============================= */

import { MemoryComponent }
from './pages/memory/memory/memory.component';

import { MemoryLevel1Component }
from './pages/memory/memory-level1/memory-level1.component';

import { MemoryLevel2Component }
from './pages/memory/memory-level2/memory-level2.component';

import { MemoryLevel3Component }
from './pages/memory/memory-level3/memory-level3.component';


/* ============================= */
/* PUZZLE GAME PAGES */
/* ============================= */

import { PuzzleComponent }
from './pages/puzzle/puzzle/puzzle';

import { PuzzleLevel1Component }
from './pages/puzzle/puzzle-level1/puzzle-level1';

import { PuzzleLevel2Component }
from './pages/puzzle/puzzle-level2/puzzle-level2';

import { PuzzleLevel3Component }
from './pages/puzzle/puzzle-level3/puzzle-level3';


/* ============================= */
/* APP ROUTES */
/* ============================= */

export const routes: Routes = [


  /* ============================= */
  /* DEFAULT ROUTE */
  /* Redirect to home page */
  /* ============================= */

  {

    path: '',

    redirectTo: 'home',

    pathMatch: 'full'
  },


  /* ============================= */
  /* MAIN APP PAGES */
  /* ============================= */

  {

    path: 'home',

    component: HomeComponent
  },

  {

    path: 'login',

    component: LoginComponent
  },
  {
  path:'register',
  component:RegisterComponent
},
  {

    path: 'account',

    component: AccountComponent
  },

  {

    path: 'dashboard',

    component: DashboardComponent
  },


  /* ============================= */
  /* ABC GAME ROUTES */
  /* ============================= */

  {

    path: 'abc',

    component: Abc
  },

  {

    path: 'abc-level1',

    component: AbcLevel1Component
  },

  {

    path: 'abc-level2',

    component: AbcLevel2Component
  },

  {

    path: 'abc-level3',

    component: AbcLevel3Component
  },

  {

    path: 'abc-level4',

    component: AbcLevel4Component
  },


  /* ============================= */
  /* NUMBER GAME ROUTES */
  /* ============================= */

  {

    path:'number',

    component:NumberComponent
  },

  {

    path:'number-level1',

    component:NumberLevel1Component
  },

  {

    path:'number-level2',

    component:NumberLevel2Component
  },

  {

    path:'number-level3',

    component:NumberLevel3Component
  },

  {

    path:'number-level4',

    component:NumberLevel4Component
  },


  /* ============================= */
  /* SHAPE SAFARI ROUTES */
  /* ============================= */

  {

    path:'shape-safari',

    component:ShapeSafariComponent
  },

  {

    path:'shape-level1',

    component:ShapeLevel1Component
  },

  {

    path:'shape-level2',

    component:ShapeLevel2Component
  },

  {

    path:'shape-level3',

    component:ShapeLevel3Component
  },


  /* ============================= */
  /* COLOR GAME ROUTES */
  /* ============================= */

  {

    path:'color',

    component: ColorComponent
  },

  {

    path:'learn-colors',

    component:LearnColorsComponent
  },

  {

    path:'find-color',

    component:FindColorComponent
  },

  {

    path:'color-matching',

    component: ColorMatchingComponent
  },


  /* ============================= */
  /* MEMORY GAME ROUTES */
  /* ============================= */

  {

    path:'memory-match',

    component: MemoryComponent
  },

  {

    path:'memory-level1',

    component: MemoryLevel1Component
  },

  {

    path:'memory-level2',

    component: MemoryLevel2Component
  },

  {

    path:'memory-level3',

    component: MemoryLevel3Component
  },


  /* ============================= */
  /* PUZZLE GAME ROUTES */
  /* ============================= */

  {

    path: 'puzzle',

    component: PuzzleComponent
  },

  {

    path:'puzzle-level1',

    component: PuzzleLevel1Component
  },

  {

    path:'puzzle-level2',

    component: PuzzleLevel2Component
  },

  {

    path:'puzzle-level3',

    component: PuzzleLevel3Component
  }

];