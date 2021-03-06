"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tf = require("./index");
describe("Union package", function () {
    it("has core ops", function () {
        expect(tf.matMul).not.toBeNull();
        expect(tf.tensor).not.toBeNull();
        expect(tf.scalar).not.toBeNull();
        expect(tf.square).not.toBeNull();
    });
    it("has layers", function () {
        expect(tf.sequential).not.toBeNull();
        expect(tf.model).not.toBeNull();
        expect(tf.layers.dense).not.toBeNull();
    });
    it("version", function () {
        var expected = require("../package.json").version;
        expect(tf.version.tfjs).toBe(expected);
        expect(tf.version["tfjs-core"]).not.toBeNull();
        expect(tf.version["tfjs-layers"]).not.toBeNull();
    });
});
//# sourceMappingURL=index_test.js.map