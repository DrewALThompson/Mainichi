class UserSerializer < ActiveModel::Serializer
  attributes :id, :name
  def userwords
    self.object.userwords.map do |userword|
      {jpname: userword.jpname, 
       definition: userword.definition,
       jpsentence: userword.jpsentence,
      engsentence: userword.engsentence}
    end 
  end 
end