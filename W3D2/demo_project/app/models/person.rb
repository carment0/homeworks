class Person < ApplicationRecord
  #enforcing to have a certain requirement, attr_accessor
  validates :name, presence: true

  belongs_to :house,
    class_name: "House",
    foreign_key: :house_id,
    primary_key: :id

    
  def to_s
    "Person: #{name}"
  end
end
