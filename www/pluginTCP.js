
//cordova.define("fr.fablab.TCP_0.pluginTCP", function(require, exports, module) { //cordova.define("fr.fablab.TCP_0.pluginTCP", function(require, exports, module) { 
/*
*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
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
var pluginTCP = {

 essai: function(success, error,args) {
/*
var args = [
{ "champ": adresseIp },
{ "champ": numPort },
{ "champ": stringMessage  }
];
args[0].champ
*/
    exec(success, error, "PluginTCP", "essai", args);
 return true;
},

param: function(success, error,args) {
/*
var args = [
{ "champ": adresseIp },
{ "champ": numPort },
];
args[0].champ
*/
    exec(success, error, "PluginTCP", "param", args);
 return true;
}
};

module.exports = pluginTCP;


//});

