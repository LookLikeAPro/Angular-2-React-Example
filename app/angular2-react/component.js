System.register(["./react", 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var react_1, core_1;
    var ReactComponent;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ReactComponent = (function () {
                function ReactComponent() {
                }
                ReactComponent.prototype.ngOnInit = function () {
                    this.id = Math.floor(Math.random() * 9999999);
                };
                ReactComponent.prototype.ngAfterViewInit = function () {
                    this.drawNode = document.getElementById(this.id.toString());
                    this.render();
                };
                ReactComponent.prototype.ngOnChanges = function () {
                    if (this.drawNode) {
                        this.render();
                    }
                };
                ReactComponent.prototype.render = function () {
                    react_1.default.render(react_1.default.createElement(this.component, this.props), this.drawNode);
                };
                ReactComponent = __decorate([
                    core_1.Component({
                        selector: 'react-component',
                        template: '<div [id]="id">wrapper</div>',
                        inputs: ['component', 'props']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ReactComponent);
                return ReactComponent;
            })();
            exports_1("ReactComponent", ReactComponent);
        }
    }
});
//# sourceMappingURL=component.js.map