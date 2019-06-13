'use strict';

import Axios from 'axios';

export default class BeerService
{
    /**
     * 
     * @param {number} skip pages to skip
     * @param {number} rowsPerPage rows per page
     * @param {string} maltType type of malt
     * @param {number} alcoholByVol AbV
     */
    async getBeers (skip, rowsPerPage, maltType, alcoholByVol)
    {
        maltType.replace(' ', '_');                      
        console.log("ok");        
        return await Axios.get(`https://api.punkapi.com/v2/beers?page=${skip}&per_page=${rowsPerPage}&malt=${maltType}${alcoholByVol!==0?"&abv_gt="+alcoholByVol:""}`); //        
    }
}