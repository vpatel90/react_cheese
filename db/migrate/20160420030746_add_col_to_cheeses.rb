class AddColToCheeses < ActiveRecord::Migration
  def change
    add_column :cheeses, :favorites_count, :integer, default: 0
  end
end
