I developed simple Angular website using some free movie data. I used the data to display different movie posters and the movie details using following methods: 
1. String Interpolation
2. Property Binding
3. Structural Directives (ngFor, ngIf)
4. Attribute Directives
5. Data Iteration
6. Angular Carousel
7. Angular Flex Layout
 
I found the warning which says:
Warning: Flex Layout loaded on the server without FlexLayoutServerModule.
I think it was because i chose server mode while installation of angular. 

Likewise, I tried to display large images in Home in Carousel using images iterated from the data, unfortunately i could not figure out the right way. It is displayed in columns instead of displaying in one single frame. 
But other functionalities work perfectly.
