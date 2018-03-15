require 'rest-client'

class Api::MangasController < ApplicationController
  
  # before_action :require_logged_in

  def index
    # When Redis is added
    # @mangas = $redis.get("mangas")

    # if @mangas.nil?
    #   url = "https://www.mangaeden.com/api/list/0/"
    #   response = RestClient.get url
    #   @mangas = JSON.parse(response.body)
    #   $redis.set("mangas", @mangas.to_json)
    # else
    #   @mangas =  JSON.parse(@mangas)
    # end


    url = "https://www.mangaeden.com/api/list/0/"
      response = RestClient.get url
      @mangas = JSON.parse(response.body)

    render "/api/mangas/index"
  end
  
  def page
    url = "https://www.mangaeden.com/api/list/0/"

    response = RestClient.get url, {params: {p: params[:id], l: 100}}
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
