/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
 var app = new Vue({
   el: '#app',
   data: {
     groups: [],
     womenFilter: false,
     girlsFilter: false,
     stemFilter: false,
     healthFilter: false,
     safeFilter: false,
     bayareaFilter: false,
     forProfitFilter: false,
     nonProfitFilter: false,
     professionalDevelopmentFilter: false,
     entrepreneurshipFilter: false,
     politicalEngagementFilter: false,
     lgbtqFilter: false,
     mentoringFilter: false,
     techFilter: false
   },

   mounted: function() {
      $.get('/api/v1/groups.json', function(result) {
         this.groups = result; 
      }.bind(this));
   },

   methods: {
         
      filter: function(group) {
         var filterArray = group.categories.map(function (category) {
            return category.category_name;
         });

         var isValid = true;

         if(this.womenFilter === true && isValid){
            if(!filterArray.includes("Women")) {
             isValid = false;
            }
         }

         if(this.girlsFilter === true && isValid){
            if(!filterArray.includes("Girls")) {
             isValid = false;
            }
         }

         if(this.stemFilter === true && isValid){
            if(!filterArray.includes("STEM")) {
             isValid = false;
            }
         }

         if(this.healthFilter === true && isValid){
            if(!filterArray.includes("Health")) {
             isValid = false;
            }
         }

         if(this.safeFilter === true && isValid){
            if(!filterArray.includes("Safety")) {
             isValid = false;
            }
         }

         if(this.bayareaFilter === true && isValid){
            if(!filterArray.includes("Bay Area")) {
             isValid = false;
            }
         }

         if(this.forProfitFilter === true && isValid){
            if(!filterArray.includes("For profit")) {
             isValid = false;
            }
         }

         if(this.nonProfitFilter === true && isValid){
            if(!filterArray.includes("Non profit")) {
             isValid = false;
            }
         }

         if(this.professionalDevelopmentFilter === true && isValid){
            if(!filterArray.includes("Professional Development")) {
             isValid = false;
            }
         }

         if(this.entrepreneurshipFilter === true && isValid){
            if(!filterArray.includes("Entrepreneurship")) {
             isValid = false;
            }
         }

         if(this.politicalEngagementFilter === true && isValid){
            if(!filterArray.includes("Political Engagement")) {
             isValid = false;
            }
         }

         if(this.lgbtqFilter === true && isValid){
            if(!filterArray.includes("LGBTQ")) {
             isValid = false;
            }
         }

         if(this.mentoringFilter === true && isValid){
            if(!filterArray.includes("Mentoring")) {
             isValid = false;
            }
         }

         if(this.techFilter === true && isValid){
            if(!filterArray.includes("Tech")) {
             isValid = false;
            }
         }

         return isValid;
         }
      },

   computed: {

   }
  });
});