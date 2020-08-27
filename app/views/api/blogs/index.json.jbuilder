@blogs.each do |blog|
    json.set! blog.id do
        json.partial! 'blog', blog: blog
        json.likerIds blog.likes do |like|
            json.extract! like, :id, :blog_id, :user_id
            # json.id like.id
            # json.blog_id like.blog_id
            # json.user_id like.user_id
        end
        json.likeCount blog.likes.length
    end
end