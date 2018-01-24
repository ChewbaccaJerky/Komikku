require 'rest-client'

class Api::MangasController < ApplicationController
  
  def index

    url = "https://www.mangaeden.com/api/list/1/"
    
    response = RestClient.get url
    @mangas = JSON.parse(response.body)
    render "/api/mangas/index"
  end

  def page
    url = "https://www.mangaeden.com/api/list/1/"

    response = RestClient.get url, {params: {p: params[:id], l: 25}}
    @mangas = JSON.parse(response.body)
    render "/api/mangas/page"
  end

  def show
    @manga_id = params[:id]
    url = "https://www.mangaeden.com/api/manga/#{@manga_id}"

    response = RestClient.get url
    @manga = JSON.parse(response.body)
    render "api/mangas/show"
  end

end
