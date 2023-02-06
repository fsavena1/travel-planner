class RemoveUserIdFromMemory < ActiveRecord::Migration[6.1]
  def change
    remove_column :memories, :user_id, :integer
  end
end
