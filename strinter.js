/**
 * Small string interpolation module
 *
 * @author: Jorge Ramirez <jorgeramirez1990@gmail.com>
 **/

(function( exports ) {
  "use strict";
  
  function error( msg ) {
    throw msg;
  }

  exports.strinter = function( str, values ) {
    var parsed = str,
        type, re;

    if( typeof str !== 'string' || str.length === 0 ){
      return '';
    }
    if( typeof values === 'string' ){
      values = [ values ];
    }
    if( values instanceof Array ){
      var sp = 0, 
          dp = 0,
          i = 0;
          
      for( ; i < values.length; i++ ){
        sp = parsed.search( /%s/ );
        dp = parsed.search( /%d/ );
        type = typeof values[ i ];

        if( type === 'string' ){
          if( sp > dp && dp > 0 ){
            error( 'found %d instead of %s' );
          }
          re = /%s/;
        }else if( type === 'number' ){
          if( dp > sp && sp > 0 ){
            error( 'found %s instead of %d' );
          }
          re = /%d/;
        }else{
          error( type + ' is not supported' );
        }
        parsed = parsed.replace( re, values[ i ] );
      }
    }else if( typeof values === 'object' ){
      var pattern;
      
      for( var prop in values ){
        type = typeof values[ prop ];
        pattern = '%\\(' + prop + '\\)';
        if( values.hasOwnProperty( prop ) ){
          if( type === 'string' ){
            pattern += 's';
          }else if( type === 'number' ){
            pattern += 'd';
          }else{
            error( type + ' is not supported' );
          }
          re = new RegExp( pattern );
          parsed = parsed.replace( re, values[ prop ] );
        }
      }
    }else{
      error( 'the second parameter must be of type String/Array/Object' );
    }
    return parsed;
  };
}( typeof exports === 'undefined' ? window : exports ));