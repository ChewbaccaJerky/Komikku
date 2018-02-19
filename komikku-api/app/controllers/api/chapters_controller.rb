require "rest-client"

class Api::ChaptersController < ApplicationController

    def show
        chapter_id = params[:id]
        url = "https://www.mangaeden.com/api/chapter/#{ chapter_id }"

        response = RestClient.get url
        @chapter = JSON.parse(response.body)
        puts @chapter
        render "api/chapters/show"
    end
end
