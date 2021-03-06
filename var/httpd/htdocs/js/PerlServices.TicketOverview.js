// --
// PerlServices.TicketOverview.js - provides functions for form handling
// Copyright (C) 2010-2014 Perl-Services.de, http://perl-services.de
// --
// $Id: PerlServices.TicketOverview.js,v 1.2 2011/04/18 17:31:06 rb Exp $
// --
// This software comes with ABSOLUTELY NO WARRANTY. For details, see
// the enclosed file COPYING for license information (AGPL). If you
// did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
// --

"use strict";

var PerlServices = PerlServices || {};

/**
 * @namespace
 * @exports TargetNS as PerlServices.TicketOverview
 * @description
 *      This namespace contains all form functions.
 */
PerlServices.TicketOverview = (function (TargetNS) {

    var Counter = 0;

    /**
     * @function
     * @description
     *      This function fills the form with the info from template 
     * @param JsonData - the tickettemplate as jsondata
     * @return nothing
     */
    TargetNS.ColorizeRows = function ( ForceColorize ) {
        if ( Counter++ > 0 && ( !ForceColorize || ForceColorize != 1 ) ) {
            return;
        }

        $( "tr.Hooked" ).each(function(){
            var row         = $(this);
            var class_list  = row.attr( 'class' );
            if ( class_list.match( /Hooked_([A-Fa-z0-9]+)/ ) ) {
                var color = RegExp.$1;
                row.children('td').each( function(index, cell) {
                    $(this).css( 'background-color', '#' + color );
                });
            }

            if ( class_list.match( /HookedFont_([A-Fa-z0-9]+)/ ) ) {
                var color = RegExp.$1;
                row.children('td').each( function(index, cell) {
                    $(this).css( 'color', '#' + color );
                });
            }
 
            if ( class_list.match( /HookedColumn_([0-9]+)_([A-Fa-z0-9]+)/ ) ) {
                var color = RegExp.$2;
                var needed_index = RegExp.$1;

                row.children('td').each( function(index, cell) {
                    if ( index != needed_index ) {
                        return;
                    }

                    $(this).css( 'background-color', '#' + color );
                });
            }
        });
    };

    return TargetNS;
}(PerlServices.TicketOverview || {}));
