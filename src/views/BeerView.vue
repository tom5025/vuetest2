
<template> 
<div>   
        <v-switch
        v-model="switchOnlyAboveSevenPct"
        v-bind:label="'Only 7% and above Abv'"
        >
        </v-switch>
        <v-data-table
                :headers='headers'
                :items='items'
                :length='pages'              
                :pagination.sync='pagination'              
                :total-items="totalItemCount"
                class='elevation-1'
        >
            <template slot='items' slot-scope='props'>          
                <td class='text-xs-left'>{{ props.item.name }}</td> 
                <td class='text-xs-left'>{{ props.item.abv }}</td>
                <td class='text-xs-left'>{{ props.item.tagline}}</td> 
                <td><img class='row col-md-1 thumbnail img-responsive img-fluid' :src='props.item.image_url' /></td>             
            </template>
        </v-data-table>
        <v-pagination v-model='pagination.page' :length='pagination.pages'></v-pagination>
    </div>
</template>
<script src="./BeerView.js">
</script>