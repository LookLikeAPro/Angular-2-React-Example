System.register(["../angular2-react/react"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var react_1;
    var MyComponent;
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            }],
        execute: function() {
            MyComponent = (function (_super) {
                __extends(MyComponent, _super);
                function MyComponent() {
                    _super.apply(this, arguments);
                }
                MyComponent.prototype.render = function () {
                    var name = this.props.name;
                    return react_1.default.createElement("div", null, "Hi ", name, ", this is a react component and my props is ", JSON.stringify(this.props));
                };
                return MyComponent;
            })(react_1.default.Component);
            exports_1("default", MyComponent);
        }
    }
});
//# sourceMappingURL=MyComponent.js.map