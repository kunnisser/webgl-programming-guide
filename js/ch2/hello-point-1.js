var main = function () {

  var webgl = new Webgl();
  webgl.vertShaderPath = "glsl/ch2/hello-point-1.vsh";
  webgl.fragShaderPath = "glsl/ch2/hello-point-1.fsh";

  webgl.script = function(gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
  };

  webgl.runScript();

};
