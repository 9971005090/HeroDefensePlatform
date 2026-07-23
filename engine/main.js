/**
 * HeroDefensePlatform
 * Engine Core
 * Version: v0.0.5
 */


/**
 * Engine Factory
 * Engine의 기본 구조를 생성합니다.
 */
function createEngine() {
    const modules = [];
    function start() {
        console.log("Engine Started");
    }

    function addModule(module) {
        modules.push(module);
    }

    function getModules() {
        return modules;
    }

    return {
        start,
        addModule,
        getModules
    };

}


/**
 * Engine Instance
 */

const Engine = createEngine();

Engine.start();