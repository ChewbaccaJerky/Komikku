require 'rest-client'

class Api::MangasController < ApplicationController
  
  def index
    page = params[:page]
    page = 1 if page.nil? 
    url = "https://www.mangaeden.com/api/list/1/"
    
    response = RestClient.get url, params: {p: page, l: 25}
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
