require "sinatra"

get "/" do
  erb :index
end

get '/photo/:id' do
  erb :index
end
