require 'rest-client'

class Api::MangasController < ApplicationController
  
  def index
    page = params[:page_id]
    puts page
    if page
      temp_params = {p: page, l: 25}
    else
      temp_params = {}
    end

    # puts temp_params

    url = "https://www.mangaeden.com/api/list/1/"
    
    response = RestClient.get url, params: temp_params
    @mangas = JSON.parse(response.body)
    render "/api/mangas/index"
  end

  def show
    @manga_id = params[:id]
    url = "https://www.mangaeden.com/api/manga/#{@manga_id}"

    response = RestClient.get url
    @manga = JSON.parse(response.body)
    render "api/mangas/show"
  end

end
