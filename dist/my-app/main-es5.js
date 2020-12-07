(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\" width=20%>\n  <a class=\"navbar-brand\" href=\"#\">Home</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- <li class=\"nav-item dropdown\">\n      </li> -->\n      <li class=\"nav-item\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\">\n        <a class=\"nav-link\" href=\"/deadlift\" >LogWorkout</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/benchpress\">BenchPress</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"squats\">WorkOutPrograms</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/benchpress/benchpress.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/benchpress/benchpress.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Bench Press Works</p>\n\n<!-- <label formArrayName=\"orders\">\n  <input type=\"checkbox\" />\n  Bhargava\n</label>\n\n<label formArrayName=\"orders\">\n  <input type=\"checkbox\" />\n  Ashok\n</label> -->\n\n<!-- <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n  <label\n    formArrayName=\"orders\"\n\n  >\n    <input type=\"checkbox\" [formControlName]=\"i\" />\n    {{ordersData[i].name}}\n  </label>\n\n  <div *ngIf=\"!form.valid\">At least one order must be selected</div>\n  <button>submit</button>\n</form> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/deadlift/deadlift.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/deadlift/deadlift.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <label></label>\n</div>\n\n\n\n<select (change)=\"selectedWorkoutType($event)\" [(ngModel)]=\"country\" class=\"btn btn-secondary dropdown-toggle\">\n  <option *ngFor=\"let country of countries\" [value]=\"country\"> {{ country }} </option>\n</select>\n\n<select (change)=\"selectedExcerciseType($event)\" *ngIf=\"country\" [(ngModel)]=\"city\" [value]=\"city\"\n  class=\"btn btn-secondary dropdown-toggle\">\n  <option *ngFor=\"let city of cities\"> {{ city }} </option>\n</select>\n\n<form [formGroup]=\"EnterWorkoutForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group has-success\">\n    <label class=\"form-control-label\">Set1</label>\n    <input type=\"text\" pattern=\"[0-9]*\" class=\"form-control-inline\" id=\"Set1\" formControlName=\"Set1\">\n    <!-- formControlName=\"Set1\" -->\n    <label></label>\n    <span class=\"input-group-addon\"> Reps </span>\n    <input type=\"text\" pattern=\"[0-9]*\" class=\"form-control-inline\" id=\"Set1Reps\" formControlName=\"Reps1\">\n  </div>\n\n  <div class=\"form-group has-success\">\n    <label class=\"form-control-label\">Set2</label>\n    <input type=\"text\"  pattern=\"[0-9]*\" class=\"form-control-inline\" id=\"Set2\" formControlName=\"Set2\">\n    <span class=\"input-group-addon\"> Reps </span>\n    <input type=\"text\"  pattern=\"[0-9]*\" class=\"form-control-inline\" id=\"Set2Reps\" formControlName=\"Reps2\">\n  </div>\n\n  <div class=\"form-group has-success\">\n    <label class=\"form-control-label\">Set3</label>\n    <input type=\"text\" pattern=\"[0-9]*\" class=\"form-control-inline\" id=\"Set3\" formControlName=\"Set3\">\n    <span class=\"input-group-addon\"> Reps </span>\n    <input type=\"text\" pattern=\"[0-9]*\" class=\"form-control-inline\" id=\"Set3Reps\" formControlName=\"Reps3\">\n  </div>\n\n\n  <div class=\"form-group has-success\">\n    <label class=\"form-control-label\">Set4</label>\n    <input type=\"text\" pattern=\"[0-9]*\" class=\"form-control-inline\" id=\"Set4\" formControlName=\"Set4\">\n    <span class=\"input-group-addon\"> Reps </span>\n    <input type=\"text\" pattern=\"[0-9]*\" class=\"form-control-inline\" id=\"Set4Reps\" formControlName=\"Reps4\">\n  </div>\n\n  <div class=\"form-group has-success\">\n    <label class=\"form-group col-xs-5 col-lg-1 \">Notes</label>\n    <input type=\"text\" class=\"form-control input-normal\" id=\"Notes\" size=\"50\" formControlName=\"Notes\">\n  </div>\n\n  <button type=\"button\" (click)=\"PostWorkout()\" class=\"btn btn-primary\">Submit</button>\n\n  <div>\n    <p *ngIf=\"notes!==null\" id=\"LastSetNotes\">{{notes}}</p>\n  </div>\n  \n</form>\n\n<p *ngIf=\"showAlert\" style=\"width:310px\">\n  <ngb-alert type=\"success\" style=\"color: black\"(close)=\"close()\">{{successMessage}}</ngb-alert>\n</p>\n\n\n<table *ngIf=\"ShowData\" class=\"table table-hover table-bordered\" style=\"width:25%\">\n  <thead>\n    <tr>\n      <th scope=\"col\">CreatedDate</th>\n      <th scope=\"col\">Set1</th>\n      <th scope=\"col\">Set2</th>\n      <th scope=\"col\">Set3</th>\n      <th scope=\"col\">Set4</th>\n      <!-- <th scope=\"col\">Notes</th> -->\n    </tr>\n  </thead>\n  <tbody>\n\n    <tr class=\"table-primary\" *ngFor=\"let item of Items\">\n      <!-- <th scope=\"row\">Primary</th> -->\n      <td>{{item.CreatedDate}}</td>\n      <td>{{item.Set1}}</td>\n      <td>{{item.Set2}}</td>\n      <td>{{item.Set3}}</td>\n      <td>{{item.Set4}}</td>\n      <!-- <td>{{item.Notes}}</td> -->\n    </tr>\n  </tbody>\n</table>\n\n\n\n\n\n<!-- *** Import doc to show data -->\n<!-- https://mdbootstrap.com/docs/angular/tables/basic/ -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/myworkout/myworkout.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/myworkout/myworkout.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  myworkout log!\n</h1>\n\n\n<table  *ngIf=\"showTodaysWorkout\" class=\"table table-hover table-bordered\" style=\"width:25%\">\n  <thead>\n    <tr>\n      <th scope=\"col\">WorkoutType</th>\n      <th scope=\"col\">Set1</th>\n      <th scope=\"col\">Set2</th>\n      <th scope=\"col\">Set3</th>\n      <th scope=\"col\">Set4</th>\n    </tr>\n  </thead>\n  <tbody>\n\n    <tr class=\"table-primary\" id=\"todaysWorkoutTable\" *ngFor=\"let item of finalTodaysWorkout\">\n      <td id=\"todaysWorkoutRow\">{{item.WorkOutType}}</td>\n      <td id=\"todaysWorkoutRow\">{{item.Set1}}</td>\n      <td id=\"todaysWorkoutRow\">{{item.Set2}}</td>\n      <td id=\"todaysWorkoutRow\">{{item.Set3}}</td>\n      <td id=\"todaysWorkoutRow\">{{item.Set4}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/squat/squat.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/squat/squat.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n  <ngb-panel title=\"Week 1 - Day 1 - Chest and Abs\">\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Dumbbell Pullover - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Dumbbell Decline Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Barbell Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Pec Deck Fly - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Hand Over-Head Crunch - 25,25,25</div>\n      <div class=\"card-body\"> Bent Knee Hip Raise - 25,25,25</div>\n      <div class=\"card-body\"> Elbow to Knee Sit Ups - 25,25,25</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25,25</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 1 - Day 2 - Back, Biceps and Cardio</b> title &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Seated Cable Rows (Wide Grip) - 15, 12, 10</div>\n      <div class=\"card-body\"> One Arm Dumbbell Row - 15, 12, 10</div>\n      <div class=\"card-body\"> Wide Grip Lat Pull-Down - 15, 12, 10</div>\n      <div class=\"card-body\"> Straight Arm Pulldown - 15, 12, 10</div>\n      <div class=\"card-body\"> Barbell curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell Bicep Curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Preacher Curls - 15, 12, 10</div>\n      <div class=\"card-body\"> Cardio Session - 15mins</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 1 - Day 3 - Shoulders, Triceps and Abs</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Dumbbell Lateral Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Barbell Shoulder Press - 15, 12, 10</div>\n      <div class=\"card-body\"> Arnold Dumbbell Press Seated - 15, 12, 10</div>\n      <div class=\"card-body\"> Reverse Flys - 15, 12, 10</div>\n      <div class=\"card-body\"> Seated Dumbbell Triceps Extension - 15, 12, 10</div>\n      <div class=\"card-body\"> Tricep Push Down - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell One Arm Tricep Extension - 15, 12, 10</div>\n      <div class=\"card-body\"> Basic Crunches - 25,25</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25</div>\n      <div class=\"card-body\"> Butt Ups - 25,25</div>\n      <div class=\"card-body\"> Dumbbell Shrug - 15,15,15</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 1- Day 4 - Legs, Calves and Cardio</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Barbell Squats - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell Squats - 15, 12, 10</div>\n      <div class=\"card-body\"> Leg Press - 15, 12, 10</div>\n      <div class=\"card-body\"> Romanian Deadlift - 15, 12</div>\n      <div class=\"card-body\"> Dumbbell Stiff Leg Deadlift - 15, 12</div>\n      <div class=\"card-body\"> Machine Leg Curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Seated Calf Raise - 15, 12</div>\n      <div class=\"card-body\"> Standing Dumbbell Calf Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Calf Press (Leg Press Machine)- 15, 12, 10</div>\n      <div class=\"card-body\"> Cardio Session - 15mins - 15, 12, 10</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 2 - Day 1 - Chest and Abs</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Dumbbell Decline Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Dumbbell Incline Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Dumbbell Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Incline Push Up - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25,25</div>\n      <div class=\"card-body\"> Butt Ups - 25,25,25</div>\n      <div class=\"card-body\"> Basic Crunches - 25,25,25</div>\n      <div class=\"card-body\"> Hand Over-Head Crunch - 25,25,25</div>\n      <div class=\"card-body\"> Elbow to Knee Sit Ups - 25,25,25</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 2 - Day 2 - Back, Biceps and Cardio</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Close Grip Front Lat Pulldown - 15, 12, 10</div>\n      <div class=\"card-body\"> V-Bar Pulldown - 15, 12, 10</div>\n      <div class=\"card-body\"> Barbell Deadlift - 15, 12, 10</div>\n      <div class=\"card-body\"> Straight Arm Pulldown - 15, 12, 10</div>\n      <div class=\"card-body\"> Preacher Curls - 15, 12, 10</div>\n      <div class=\"card-body\"> Close Grip EZ Bar Curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Barbell curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Cardio Session - 15mins</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 2 - Day 3 - Shoulders, Triceps and Abs</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Front Delt Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell Lateral Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Arnold Dumbbell Press Seated - 15, 12, 10</div>\n      <div class=\"card-body\"> Reverse Flys - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell One Arm Tricep Extension - 15, 12, 10</div>\n      <div class=\"card-body\"> Overhead Triceps Extension - 15, 12, 10</div>\n      <div class=\"card-body\"> Seated Dumbbell Triceps Extension  - 15, 12, 10</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25</div>\n      <div class=\"card-body\"> Basic Crunches - 25,25</div>\n      <div class=\"card-body\"> Butt Ups - 25,25</div>\n      <div class=\"card-body\"> Bent Knee Hip Raise - 25,25</div>\n      <div class=\"card-body\"> Dumbbell Shrug  - 15,15,15</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 2 - Day 4 - Legs, Calves and Cardio</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Barbell Squats - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell Squats - 15, 12, 10</div>\n      <div class=\"card-body\"> Leg Press - 15, 12, 10</div>\n      <div class=\"card-body\"> Romanian Deadlift - 15, 12</div>\n      <div class=\"card-body\"> Dumbbell Stiff Leg Deadlift - 15, 12</div>\n      <div class=\"card-body\"> Machine Leg Curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Seated Calf Raise - 15, 12</div>\n      <div class=\"card-body\"> Standing Dumbbell Calf Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Standing Calf Raise- 15, 12, 10</div>\n      <div class=\"card-body\"> Cardio Session - 15mins - 15, 12, 10</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 3 - Day 1 - Chest and Abs</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Barbell Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Dumbbell Incline Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Dumbbell Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Incline Push Up - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25,25</div>\n      <div class=\"card-body\"> Butt Ups - 25,25,25</div>\n      <div class=\"card-body\"> Hand Over-Head Crunch - 25,25,25</div>\n      <div class=\"card-body\"> Elbow to Knee Sit Ups - 25,25,25</div>\n    </ng-template>\n  </ngb-panel>\n\n\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 3 - Day 2 - Back, Biceps and Cardio</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> One Arm Dumbbell Row - 15, 12, 10</div>\n      <div class=\"card-body\"> V-Bar Pulldown - 15, 12, 10</div>\n      <div class=\"card-body\"> Close Grip Front Lat Pulldown - 15, 12, 10</div>\n      <div class=\"card-body\"> Straight Arm Pulldown - 15, 12, 10</div>\n      <div class=\"card-body\"> Preacher Curls - 15, 12, 10</div>\n      <div class=\"card-body\"> Close Grip EZ Bar Curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Barbell curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Cardio Session - 15mins</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 3 - Day 3 - Shoulders, Triceps and Abs</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Machine Shoulder Press - 15, 12, 10</div>\n      <div class=\"card-body\"> Machine Reverse Fly - 15, 12, 10</div>\n      <div class=\"card-body\"> Arnold Dumbbell Press Seated - 15, 12, 10</div>\n      <div class=\"card-body\"> Side Lateral Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Skull Crusher - EZ Bar - 15, 12, 10</div>\n      <div class=\"card-body\"> Tricep Rope Pull Down - 15, 12, 10</div>\n      <div class=\"card-body\"> Tricep Push Down - 15, 12, 10</div>\n      <div class=\"card-body\"> Seated Leg Tucks - 25,25</div>\n      <div class=\"card-body\"> Hand Over-Head Crunch - 25,25</div>\n      <div class=\"card-body\"> Bent Knee Hip Raise - 25,25</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25</div>\n      <div class=\"card-body\"> Dumbbell Shrug  - 15,15,15</div>\n      <div class=\"card-body\"> Dumbbell Shrug  - 15,15,15</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 3 - Day 4 - Legs, Calves and Cardio</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Leg Extension - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell Squats - 15, 12, 10</div>\n      <div class=\"card-body\"> Barbell Squats - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell Stiff Leg Deadlift - 15, 12</div>\n      <div class=\"card-body\"> Good Morning Hamstrings - 15, 12</div>\n      <div class=\"card-body\"> Machine Leg Curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Seated Calf Raise - 15, 12</div>\n      <div class=\"card-body\"> Standing Dumbbell Calf Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Standing Calf Raise- 15, 12, 10</div>\n      <div class=\"card-body\"> Cardio Session - 15mins - 15, 12, 10</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 4 - Day 1 - Chest and Abs</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Barbell Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Dumbbell Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Dumbbell Incline Bench Press - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Dip Machine - 15, 12, 10, 8</div>\n      <div class=\"card-body\"> Seated Leg Tucks - 25,25,25</div>\n      <div class=\"card-body\"> Bent Knee Hip Raise - 25,25,25</div>\n      <div class=\"card-body\"> Basic Crunches - 25,25,25</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25,25</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 4 - Day 2 - Back, Biceps and Cardio</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Chin Up - 15, 12, 10</div>\n      <div class=\"card-body\"> Seated Cable Rows (Narrow Grip) - 15, 12, 10</div>\n      <div class=\"card-body\"> Barbell Deadlift - 15, 12, 10</div>\n      <div class=\"card-body\"> Straight Arm Pulldown - 15, 12, 10</div>\n      <div class=\"card-body\"> Close Grip EZ Bar Curl  - 15, 12, 10</div>\n      <div class=\"card-body\"> Alternate Incline Dumbbell Curl - 15, 12, 10</div>\n      <div class=\"card-body\"> Preacher Curls - 15, 12, 10</div>\n      <div class=\"card-body\"> Cardio Session - 15mins</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 4 - Day 3 - Shoulders, Triceps and Abs</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Front Delt Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell Lateral Raise - 15, 12, 10</div>\n      <div class=\"card-body\"> Arnold Dumbbell Press Seated - 15, 12, 10</div>\n      <div class=\"card-body\"> Reverse Flys - 15, 12, 10</div>\n      <div class=\"card-body\"> Skull Crusher - EZ Bar  - 15, 12, 10</div>\n      <div class=\"card-body\"> Seated Leg Tucks - 25,25</div>\n      <div class=\"card-body\"> Hanging Leg Raises - 25,25</div>\n      <div class=\"card-body\"> Basic Crunches - 25,25</div>\n      <div class=\"card-body\"> Butt Ups - 25,25</div>\n      <div class=\"card-body\"> Barbell Shrugs (Behind Back) - 15,15,15</div>\n      <div class=\"card-body\"> Standing Dumbbell Upright Row (Close Grip) - 15,15,15</div>\n    </ng-template>\n  </ngb-panel>\n\n  <ngb-panel>\n    <ng-template ngbPanelTitle>\n      <span>&#9733; <b>Week 4 - Day 4 - Legs, Calves and Cardio</b> &#9733;</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n      <div class=\"card-body\"> Barbell Squat - 15, 12, 10</div>\n      <div class=\"card-body\"> Leg Press - 15, 12, 10</div>\n      <div class=\"card-body\"> Leg Extension - 15, 12, 10</div>\n      <div class=\"card-body\"> Dumbbell Squats - 15, 12</div>\n      <div class=\"card-body\"> Dumbbell Stiff Leg Deadlift  - 15, 12</div>\n      <div class=\"card-body\"> Good Morning Hamstrings - 15,12</div>\n      <div class=\"card-body\"> Standing Dumbbell Calf Raise - 15,12</div>\n      <div class=\"card-body\"> Seated Calf Raise - 15,12</div>\n      <div class=\"card-body\"> Cardio Session - 15mins</div>\n    </ng-template>\n  </ngb-panel>\n\n\n\n  <!-- <ngb-panel title=\"Disabled\" [disabled]=\"true\">\n    <ng-template ngbPanelContent>\n      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n      aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n      sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n      craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n      occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n      labore sustainable VHS.\n    </ng-template>\n  </ngb-panel> -->\n</ngb-accordion>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-collapse.in {\n    display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItY29sbGFwc2UuaW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products */ "./src/products.ts");
/* harmony import */ var _workouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workouts */ "./src/app/workouts.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app';
        this.products = _products__WEBPACK_IMPORTED_MODULE_2__["products"];
        this.workouts = _workouts__WEBPACK_IMPORTED_MODULE_3__["workouts"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _myworkout_myworkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myworkout/myworkout.component */ "./src/app/myworkout/myworkout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _deadlift_deadlift_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deadlift/deadlift.component */ "./src/app/deadlift/deadlift.component.ts");
/* harmony import */ var _benchpress_benchpress_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./benchpress/benchpress.component */ "./src/app/benchpress/benchpress.component.ts");
/* harmony import */ var _squat_squat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./squat/squat.component */ "./src/app/squat/squat.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");












// Third party modules

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _myworkout_myworkout_component__WEBPACK_IMPORTED_MODULE_6__["MyworkoutComponent"],
                _deadlift_deadlift_component__WEBPACK_IMPORTED_MODULE_8__["DeadliftComponent"],
                _benchpress_benchpress_component__WEBPACK_IMPORTED_MODULE_9__["BenchpressComponent"],
                _squat_squat_component__WEBPACK_IMPORTED_MODULE_10__["SquatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: '', component: _myworkout_myworkout_component__WEBPACK_IMPORTED_MODULE_6__["MyworkoutComponent"] },
                    { path: 'deadlift', component: _deadlift_deadlift_component__WEBPACK_IMPORTED_MODULE_8__["DeadliftComponent"] },
                    { path: 'benchpress', component: _benchpress_benchpress_component__WEBPACK_IMPORTED_MODULE_9__["BenchpressComponent"] },
                    { path: 'squats', component: _squat_squat_component__WEBPACK_IMPORTED_MODULE_10__["SquatComponent"] }
                ]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/benchpress/benchpress.component.css":
/*!*****************************************************!*\
  !*** ./src/app/benchpress/benchpress.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlbmNocHJlc3MvYmVuY2hwcmVzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/benchpress/benchpress.component.ts":
/*!****************************************************!*\
  !*** ./src/app/benchpress/benchpress.component.ts ***!
  \****************************************************/
/*! exports provided: BenchpressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenchpressComponent", function() { return BenchpressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BenchpressComponent = /** @class */ (function () {
    function BenchpressComponent() {
        this.isCollapsed = false;
    }
    BenchpressComponent.prototype.ngOnInit = function () {
    };
    BenchpressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-benchpress,ngbd-collapse-basic',
            template: __webpack_require__(/*! raw-loader!./benchpress.component.html */ "./node_modules/raw-loader/index.js!./src/app/benchpress/benchpress.component.html"),
            styles: [__webpack_require__(/*! ./benchpress.component.css */ "./src/app/benchpress/benchpress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BenchpressComponent);
    return BenchpressComponent;
}());



/***/ }),

/***/ "./src/app/deadlift/deadlift.component.css":
/*!*************************************************!*\
  !*** ./src/app/deadlift/deadlift.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n  margin: 10px;\n}\n\n/* #Set1 {\n  width: 100px;\n} */\n\n/* input {\n  width: 100px;\n} */\n\n.form-control-inline {\n  width: 100px;\n}\n\n#Notes {\n  size: 100;\n  width: 300px;\n}\n\n#LastSetNotes {\n  color: red;\n  right: -34px;\n  position: relative;\n  bottom: -7px;\n  width: 300px;\n}\n\n.Set1 {\n  margin: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhZGxpZnQvZGVhZGxpZnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTs7R0FFRzs7QUFFSDs7R0FFRzs7QUFFSDtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZGVhZGxpZnQvZGVhZGxpZnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlbGVjdCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLyogI1NldDEge1xuICB3aWR0aDogMTAwcHg7XG59ICovXG5cbi8qIGlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xufSAqL1xuXG4uZm9ybS1jb250cm9sLWlubGluZSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuI05vdGVzIHtcbiAgc2l6ZTogMTAwO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbiNMYXN0U2V0Tm90ZXMge1xuICBjb2xvcjogcmVkO1xuICByaWdodDogLTM0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtN3B4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5TZXQxIHtcbiAgbWFyZ2luOiAxcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/deadlift/deadlift.component.ts":
/*!************************************************!*\
  !*** ./src/app/deadlift/deadlift.component.ts ***!
  \************************************************/
/*! exports provided: DeadliftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeadliftComponent", function() { return DeadliftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var DeadliftComponent = /** @class */ (function () {
    function DeadliftComponent(http) {
        this.http = http;
        this.map = new Map([
            // tslint:disable-next-line: max-line-length
            ['Chest', ['DumbbellPullOver', 'DumbbellDeclineBenchPress', 'BarbellBenchPress', 'PecDeckFly', 'DumbbellBenchPress', 'DumbbellInclineBenchPress', 'DumbbellFlys']],
            ['Back', ['SeatedCableRowsWideGrip', 'OneArmDumbbellRow', 'CloseGripFrontLatPulldown', 'StraightArmPulldown', 'BarbellDeadlift']],
            ['Shoulders', ['FrontDeltRaise', 'MachineShoulderPress', 'BarbellShoulderPress', 'FrontPlateRaise', 'ReverseFlyes', 'ArnoldDumbbellPressSeated', 'BarbellShrugs', 'DumbbellLateralRaise']],
            ['Abs', ['BentKneeHipRaise', 'HandOver-HeadCrunch', 'ElbowToKneeSitUps', 'HangingLegRaises', 'BasicCrunches', 'MedicineBallCrunches', 'SeatedLegTucks']],
            ['Biceps', ['CloseGripEZBarCurl', 'CableBicepCurls', 'CableHammerCurls', 'AlternateInclineDumbbellCurl']],
            ['Triceps', ['SkullCrusherEZBar', 'SeatedDumbbellTricepsExtension', 'OverheadTricepsExtension', 'V-BarCableExtensions', 'TricepRopePullDown']],
            ['Legs', ['BarbellSquats', 'LegPress', 'LegExtensions', 'GoodMornings', 'DumbbellStiffLegDeadlift', 'DumbbellSquats', 'SeatedCalfRaise']]
        ]);
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            TextID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.EnterWorkoutForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Set1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Reps1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Set2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Reps2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Set3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Reps3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Set4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Reps4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            Notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    DeadliftComponent_1 = DeadliftComponent;
    DeadliftComponent.prototype.ngOnInit = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.deadliftHistory = this.http.get(DeadliftComponent_1.hostName + "/getworkouthistory?TableName=Chest&WorkOutType=BarbellBenchPress")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            if (data) {
                _this.Items = data;
            }
        })).subscribe();
    };
    Object.defineProperty(DeadliftComponent.prototype, "countries", {
        get: function () {
            return Array.from(this.map.keys());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeadliftComponent.prototype, "cities", {
        get: function () {
            return this.map.get(this.country);
        },
        enumerable: true,
        configurable: true
    });
    DeadliftComponent.prototype.selectedWorkoutType = function (event) {
        this.selectedWorkoutValue = event.target.value;
        console.log("************");
        console.log(this.loginForm.value.TextID);
        // this.getTodaysWorkout();
    };
    DeadliftComponent.prototype.selectedExcerciseType = function (event) {
        this.selectedExcerciseValue = event.target.value;
        this.selectedExercise();
        //this.PostWorkout();
    };
    DeadliftComponent.prototype.selectedExercise = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.deadliftHistory = this.http.get(DeadliftComponent_1.hostName + "/getworkouthistory?TableName=" + this.selectedWorkoutValue + "&WorkOutType=" + this.selectedExcerciseValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            if (data) {
                _this.Items = data;
                //  console.log('testing notes' + this.Items[0].Notes);
                //  this.notes = this.Items[0].Notes;
                //  console.log('notes value is ' + this.notes);
                if (_this.Items === undefined
                    && _this.Items[0].Notes === undefined) {
                    console.log('inside the if loop');
                    _this.notes = null;
                }
                else if (_this.Items.length > 0) {
                    // console.log('length is' + this.Items.length + 'date is' + this.Items[this.Items.length-1].CreatedDate);
                    _this.notes = _this.Items[0].Notes;
                    console.log('inside if loop');
                }
                else {
                    _this.notes = null;
                    console.log('inside else loop');
                }
                _this.ShowData = true; // show workout details only when a drop down is selected
            }
        })).subscribe();
    };
    // Adding workout to the dynamo db
    DeadliftComponent.prototype.PostWorkout = function () {
        var _this = this;
        var postBody = {
            "TableName": this.selectedWorkoutValue,
            "CreatedDate": Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(new Date(), 'MM/dd/yyyy', 'en'),
            "WorkOutType": this.selectedExcerciseValue,
            "Notes": this.EnterWorkoutForm.value.Notes,
            "Set1": "" + this.EnterWorkoutForm.value.Set1 + "*" + this.EnterWorkoutForm.value.Reps1,
            "Set2": "" + this.EnterWorkoutForm.value.Set2 + "*" + this.EnterWorkoutForm.value.Reps2,
            "Set3": "" + this.EnterWorkoutForm.value.Set3 + "*" + this.EnterWorkoutForm.value.Reps3,
            "Set4": "" + this.EnterWorkoutForm.value.Set4 + "*" + this.EnterWorkoutForm.value.Reps4
        };
        var url = DeadliftComponent_1.hostName + "/PostDataIntoDynamo";
        this.http.post(url, postBody).subscribe(function (data) {
            console.log("The success message value before post+" + _this.successMessage);
            console.log("the post data is" + data);
            _this.successMessage = data;
            _this.showAlert = true;
            console.log('resetting the form');
            _this.EnterWorkoutForm.reset(); // This to reset the form after submit
            _this.selectedExercise(); // calling get again to refresh data 
            _this.ngOnInit(); // This is to refresh form after submitting a workout
        });
    };
    // This function will close the success alert once we click on close button
    DeadliftComponent.prototype.close = function () {
        console.log(' this is close function');
        this.showAlert = false;
    };
    var DeadliftComponent_1;
    DeadliftComponent.hostName = "https://q6rrg5mw2k.execute-api.us-east-2.amazonaws.com/default";
    DeadliftComponent = DeadliftComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deadlift',
            template: __webpack_require__(/*! raw-loader!./deadlift.component.html */ "./node_modules/raw-loader/index.js!./src/app/deadlift/deadlift.component.html"),
            styles: [__webpack_require__(/*! ./deadlift.component.css */ "./src/app/deadlift/deadlift.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DeadliftComponent);
    return DeadliftComponent;
}());



/***/ }),

/***/ "./src/app/myworkout/myworkout.component.css":
/*!***************************************************!*\
  !*** ./src/app/myworkout/myworkout.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#todaysWorkoutRow {\n    background-color: #222323;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXl3b3Jrb3V0L215d29ya291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbXl3b3Jrb3V0L215d29ya291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvZGF5c1dvcmtvdXRSb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIzMjM7XG59Il19 */"

/***/ }),

/***/ "./src/app/myworkout/myworkout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myworkout/myworkout.component.ts ***!
  \**************************************************/
/*! exports provided: MyworkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyworkoutComponent", function() { return MyworkoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workouts */ "./src/app/workouts.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var MyworkoutComponent = /** @class */ (function () {
    function MyworkoutComponent(http) {
        this.http = http;
        this.workouts = _workouts__WEBPACK_IMPORTED_MODULE_2__["workouts"];
    }
    MyworkoutComponent_1 = MyworkoutComponent;
    MyworkoutComponent.prototype.ngOnInit = function () {
        this.getTodaysWorkout();
    };
    MyworkoutComponent.prototype.getTodaysWorkout = function () {
        var _this = this;
        var d = new Date();
        // d.setDate(d.getDate()-5); // subtract days
        this.todaysWorkout = this.http.get(MyworkoutComponent_1.hostName + "/todaysworkout?WorkoutDate=" + Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(d, 'MM/dd/yyyy', 'en'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log('final todays workout');
            if (data) {
                _this.finalTodaysWorkout = data;
                console.log('inside if loop');
                _this.showTodaysWorkout = _this.finalTodaysWorkout.length > 0 ? true : false;
                console.log(_this.showTodaysWorkout);
                console.log(_this.finalTodaysWorkout.length);
            }
        })).subscribe();
    };
    var MyworkoutComponent_1;
    MyworkoutComponent.hostName = "https://q6rrg5mw2k.execute-api.us-east-2.amazonaws.com/default";
    MyworkoutComponent = MyworkoutComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myworkout',
            template: __webpack_require__(/*! raw-loader!./myworkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/myworkout/myworkout.component.html"),
            styles: [__webpack_require__(/*! ./myworkout.component.css */ "./src/app/myworkout/myworkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MyworkoutComponent);
    return MyworkoutComponent;
}());



/***/ }),

/***/ "./src/app/squat/squat.component.css":
/*!*******************************************!*\
  !*** ./src/app/squat/squat.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accordion-section-content {\n    padding:15px;\n    display:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3F1YXQvc3F1YXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3F1YXQvc3F1YXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvcmRpb24tc2VjdGlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOjE1cHg7XG4gICAgZGlzcGxheTpub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/squat/squat.component.ts":
/*!******************************************!*\
  !*** ./src/app/squat/squat.component.ts ***!
  \******************************************/
/*! exports provided: SquatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquatComponent", function() { return SquatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SquatComponent = /** @class */ (function () {
    function SquatComponent() {
    }
    SquatComponent.prototype.ngOnInit = function () {
    };
    SquatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-squat',
            template: __webpack_require__(/*! raw-loader!./squat.component.html */ "./node_modules/raw-loader/index.js!./src/app/squat/squat.component.html"),
            styles: [__webpack_require__(/*! ./squat.component.css */ "./src/app/squat/squat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SquatComponent);
    return SquatComponent;
}());



/***/ }),

/***/ "./src/app/workouts.ts":
/*!*****************************!*\
  !*** ./src/app/workouts.ts ***!
  \*****************************/
/*! exports provided: workouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workouts", function() { return workouts; });
var workouts = [
    {
        name: 'deadlift',
        price: 799,
        description: 'A large phone with one of the best screens',
        href: "https://angular.io/tutorial"
    },
    {
        name: 'benchpress',
        price: 699,
        description: 'A great phone with one of the best cameras'
    },
    {
        name: 'squats',
        price: 299,
        description: ''
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/products.ts":
/*!*************************!*\
  !*** ./src/products.ts ***!
  \*************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
var products = [
    {
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens'
    },
    {
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras'
    },
    {
        name: 'Phone Standard',
        price: 299,
        description: ''
    }
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bhaagi/dev/LearningAngular/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map