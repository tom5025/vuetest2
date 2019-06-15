import BeerService from '../services/BeerService';


export default {     
      name :'BeerView',
      watch:
      {
          /**
           * called when we change the seven pct switch
           * @param {boolean} newValue 
           */
          async switchOnlyAboveSevenPct(newValue){
            this.pagination.page = 1;
            await this.LoadData(this);
          },          
          "pagination.page":
          {
            async handler()
            {
              await this.LoadData(this);  
            }
          }
          
      },
      /**
       * When the Vue instance is mounted
       */
      async mounted () {          
          await this.LoadData(this);          
      },
      computed: {
            pages() {
                return 5
            },
            totalItemCount() {
                return 100
            }
      },      
      data: () => ({ 
        /**
        * Load data from the beer service
        */
        async  LoadData() {
          let svc = new BeerService();
          const res = await svc.getBeers(this.pagination.page, this.pagination.rowsPerPage, this.maltType, this.switchOnlyAboveSevenPct ? 7 : 0);
          this.items = res.data;
        },    
        search: '',
        // totalItems: 0,
        items: [],
        pagination: {
          sortBy: 'name',
          page:1,
          rowsPerPage:5,        
          pages:5  
        },
        headers: [   
          { text: 'Name', value: 'name' },     
          { text: 'Alcohol by volume', value:'abv'},
          { text: 'tagline', value:'tagline'},
          { text: '', value:'image_url'}
        ],
        //switch        
        switchOnlyAboveSevenPct:false,  
        maltType:"Extra Pale"          
      }),         
  };