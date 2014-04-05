cordova.define("fr.fablab.TCP.pluginTCP", function(require, exports, module) { /*
 *
 * FREE
*/

/**
 * This class provides access to device accelerometer data.
 * @constructor
 */
var argscheck = require('cordova/argscheck'),
    utils = require("cordova/utils"),
    exec = require("cordova/exec");
    // Acceleration = require('./Acceleration');   <== Acceleration.js dans le même répertoire

// Is the accel sensor running?
var running = false;

// Array of listeners; used to keep track of when we should call start and stop.
var listeners = [];

// Last returned acceleration object from native
var accel = null;




// SUCCESS
function success(x) {
    //alert("SUCCESS 1 ("+x+")");
}

// ERROR
function error(x) {
    alert("ERROR 1");
}


       //*****************************************************************************************************
       //**                                                                                                 **
       //**                                                                                                 **
       //**                  objet appli                                                                    **
       //**   défini dans :                                                                                 **
       //**   <clobbers target="pluginTCP" />                                                               **
       //**   /home/leo/Lsites/Projet/plugins/TCP/plugin.xml                                                **
       //**                                                                                                 **
       //**                                                                                                 **
       //*****************************************************************************************************

       //*********************************************************
       //**                                                     **
       //**        appels aux fonctions natives java            **
       //**                                                     **
       //*********************************************************

/*
Le premier paramètre de la fonction exec 
est le callback qui est appelé en cas de réussit de la fonction. 
Le deuxième paramètre est 
le callback qui est appelé en cas d'échec de la fonction. 
Le troisième paramètre est le nom de notre class JAVA 
Le quatrième paramètre est le nom de l'action à exécuter 
Le cinquième paramètre contiens les arguments à passer à la fonction JAVA
*/
// Tells native to essai.
var pluginTCP = function(){};

pluginTCP.prototype.essai = function(success, error,datagramMessage) {
    var args = [datagramMessage];
    //var args = [];
    exec(success, error, "PluginTCP", "essai", args);
}

module.exports = new pluginTCP();


});
