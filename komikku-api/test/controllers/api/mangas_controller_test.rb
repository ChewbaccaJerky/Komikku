require 'test_helper'

class Api::MangasControllerTest < ActionDispatch::IntegrationTest
  test "should get :index," do
    get api_mangas_:index,_url
    assert_response :success
  end

  test "should get :show" do
    get api_mangas_:show_url
    assert_response :success
  end

end
