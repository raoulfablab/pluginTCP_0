/*
FREE
*/
package fr.fablab.TCP_0;


import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONObject;

import org.json.JSONException;
import java.net.*;

import java.io.OutputStream;

/**
 * modèle de plugin
 * 
 */
public class PluginTCP extends CordovaPlugin {

     // params par défaut
     String portString ="8899";
     String ipString="192.168.0.199";
     int portInt=Integer.parseInt(portString);
    /**
     *
     * Constructeur
     *
     */
    public PluginTCP() {
       // vide
     }

    // http://www.helloandroid.com/tutorials/simple-udp-communication-example
    // <uses-permission android:name="android.permission.INTERNET"></uses-permission>
    public void envoi() {

     Socket       sock  =null;
     OutputStream out   =null;
     
//System.out.println("debug 140325073100 portString="+portString);
     portInt=Integer.parseInt(portString); 


             try
              {
//System.out.println("debug xxxxxxxxxxxxx debut envoi");
               sock=new Socket(ipString,portInt);
               sock.setSendBufferSize(tableauBytes.length);
               out=sock.getOutputStream();

               out.write(tableauBytes);
               out.flush();
               sock.shutdownOutput();
               sock.close();
//System.out.println("debug xxxxxxxxxxxxx fin envoi");
//System.out.println("message emis");
              }catch(Exception exp)
              {
               System.out.println(exp);
              }

    }


/*
Le premier paramètre est le nom de l'action qui doit être exécuter. Dans notre cas c'est send. 
Le deuxième paramètre est un objet contenant les arguments passés à la fonction essai 
Le troisième paramètre est l'objet qui va permettre d'appeler les callback success et error
/home/leo/Lsites/HelloWorld/helloworld/platforms/android/CordovaLib/src/org/apache/cordova/CordovaPlugin.java
/home/leo/Lsites/HelloWorld/helloworld/platforms/android/CordovaLib/src/org/apache/cordova/App.java

essai  => var args = [datagramMessage];
ou
param  => var args = [adresseIp, numPort];

*/
    String chaineSource = "";
    String chaineDest="";
    String[] chaineTableau = null;
    byte[] tableauBytes = null;
    @Override

	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) {
	//public boolean execute(String action, JSONObject args, CallbackContext callbackContext) {
        if("essai".equals(action)) {

         // charger l'argument "[O,1,..n]" dans String chaineSource
         try{
          chaineSource = "";
//System.out.println("debug trace 1 ()");
          //chaineSource = args.get(0).toString();
          chaineSource = args.getString(0);
//System.out.println("essai trace 2 ("+chaineSource+")");

         } catch (JSONException e){
	  callbackContext.error("KO ("+e+")");
          return false;
         }

         // charger l'argument "O,1,..n" dans String chaineDest
         chaineDest="";
         for(int i=0; i<chaineSource.length(); i++){
          if( ((chaineSource.charAt(i)>='0') &&
              (chaineSource.charAt(i)<='9')) || 
              (chaineSource.charAt(i)==',')
           ){
           chaineDest=chaineDest+chaineSource.charAt(i);
          }
         }

         // charger l'argument [O,1,..n] dans String[] chaineTableau
         chaineTableau=chaineDest.split(",");


         // charger l'argument ["O","1",.."n"] byte[] tableauBytes
         tableauBytes = new byte[chaineTableau.length];
//System.out.println("essai xxxxxxxxxxxxx "+tableauBytes.length);
//Log.v("TAG", "debug xxxxxxxxxxxxx");
         for(int i=0; i<chaineTableau.length; i++){
          try{
            int j=Integer.parseInt(chaineTableau[i]);
            tableauBytes[i]=(byte)j;
          }catch (NumberFormatException e){
           callbackContext.error("ECHEC java 140312165515");
           return false;
          }

         }
//System.out.println("essai xxxxxxxxxxxxx "+tableauBytes.length);
//Log.v("TAG", "debug xxxxxxxxxxxxx");
         envoi();

         callbackContext.success("=>"+chaineDest);
         return true;
        
        } else { //$$0
         if("param".equals(action)) {
         // initialiser ip et port
          try{
           chaineSource = "";
           //chaineSource = args.get(0).toString();
           chaineSource = args.getString(0);
           ipString=chaineSource;

           chaineSource = args.getString(1);
           portString=chaineSource;
           portInt=Integer.parseInt(portString);
           
          callbackContext.success("ip="+ipString+" port="+portInt);
          return true;

          } catch (JSONException e){
	   callbackContext.error("KO 140324104650 ("+e+")");
           return false;
          }

         } else {
          callbackContext.error("ECHEC java 140324104700");
          return false;
         }
        }
    } // fin de boolean execute


} // fin de class PluginTCP
