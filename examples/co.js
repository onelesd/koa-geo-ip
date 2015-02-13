var co = require( 'co' );
var osenv = require( 'osenv' );

var g = require( './lib' );
var gg = g({
    db: osenv.home() + '/.db/geo/country.mmdb'
});

co( function *() {
    var location = {
        ip: '128.101.101.101'
    };
    yield gg.call( location );
    return location.geo;
}).then( function( val ) {
    console.log( 'geo', val );
}).catch( function( err ) {
    console.log( 'error', err );
});
