require 'test_helper'

class GraphicsControllerTest < ActionController::TestCase
  test "should get tile" do
    get :tile
    assert_response :success
  end

end
