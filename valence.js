/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
/* global module */

(function (global, factory) {

    'use strict'

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = global.document ?
            factory(global, true) :
            (w) => {
                if (!w.document) {
                    throw new Error('Valence requires a window with a document')
                }
                return factory(w)
            }
    } else {
        factory(global)
    }

}(typeof window !== 'undefined' ? window : this, window => {
    'use strict'

    /*
    PLAN
    Make a white pages object with the routing table.
    http://docs.valence.desire2learn.com/http-routingtable.html
    */

    /*Specify option with lp or le with this.api_base_string.  lr seems unnecessary*/


    /*STATIC METHODS*/
    function getCall(call, ver, ou) {
        let directory = {
            whoami: `/d2l/api/lp/${ver}/users/whoami`,
            getFinalGrade: `/d2l/api/le/${ver}/${ou}/grades/values/myGradeValues/`
        }

        return directory[call]
    }

    /*CONSTRUCTOR*/
    function Construct(version, call, callback) {
        this.lib_version = version
        this.api_version = 1.15
        this.call = call
        this.ou = this.getOU()
        this.api_base_string = getCall(this.call, this.api_version, this.ou)
        this.callback = callback
        this.response = {}

        this.asyncr = arguments[2] ? true : false

        this.fetch(this.asyncr)
    }

    /*PROTOTYPE METHODS*/
    Construct.prototype = {
        fetch: function (asyncr) {

            var httpRequest = new XMLHttpRequest(),
                that = this,
                bool = asyncr

            console.log(bool)

            httpRequest.open('GET', this.api_base_string, bool)

            httpRequest.onload = function () {
                let r = JSON.parse(this.responseText)
                that.response = r
                that.callback ? that.callback(r) : console.warn("You have done a synchronous request.  Are you sure you want to continue?")
            }

            httpRequest.onerror = function (e) {
                console.log('Can not retrieve API data', e, httpRequest.statusText)
            }

            httpRequest.setRequestHeader('Content-Type', 'application/json')
            httpRequest.send()

            return this
        },
        getOU: function () {
            //Parse the URL and return a string for the OU
            var ou = window.location.pathname.split('/')[4] || window.location.pathname.split('/')[3]
            return ou
        }
    }

    /*WINDOW ATTACHER*/
    window.valence = function (a, b) {
        let vers = '2.0.0',
            obj = new Construct(vers, a, b)

        return obj
    }

}))
