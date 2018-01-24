json.page @mangas["page"]
json.mangas do
        @mangas["manga"].each do |manga|
            json.set! manga["i"] do
                json.id manga["i"]
                json.title manga["t"]
                json.alias manga["a"]
                json.category manga["c"]
                json.hits manga["h"]
                json.last_chapter_date manga["ld"]
                json.status manga["s"]
                json.image manga["im"]
            end
        end
end
