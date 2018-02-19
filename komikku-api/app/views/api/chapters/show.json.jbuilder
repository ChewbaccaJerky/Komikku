json.chapter do
    @chapter["images"].each do |chap|
        json.set! chap[0] do
            json.page chap[0]
            json.image_url chap[1]
        end
    end
end