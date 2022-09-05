library(tidyverse)
library(httr)
library(leaflet)

get_gmaps_data <- function(keyword, type = "", central_lat = -23.55052, 
                            central_lng = -46.63331, radius = 15000, key) {
   base_url = "https://maps.googleapis.com/maps/api/place/radarsearch/json"
   query <- list(
     location = paste(central_lat, central_lng, sep = ','),
     radius = radius, type = type, keyword = keyword, key = key
   )
   response <- GET(base_url, query = query)
   json <- content(response, 'parsed', simplify = TRUE) 
   as_tibble(json$results$geometry$location) 
     mutate(place = keyword)
     df_places 
     places <- c("pronto socorro", "delegacia", "bombeiros", "hamburguer", "pizza")
 
    df_places <- places 
    map_df(get_gmaps_data, key = key)}
    df_places 
   filter(place == "pronto socorro")
   leaflet()  
   addTiles() 
   addCircles(lng = ~long, lat = ~lat, weight = 5,
              radius = 1000, color = "blue", fillOpacity = 0.5)