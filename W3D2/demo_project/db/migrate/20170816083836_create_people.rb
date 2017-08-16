class CreatePeople < ActiveRecord::Migration[5.1]
  def change
    create_table :people do |table|
      table.string :name
      table.integer :house_id
      table.timestamps
    end
  end
end
