# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170116014919) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.integer  "question_id", null: false
    t.integer  "order",       null: false
    t.text     "body",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["question_id"], name: "index_answers_on_question_id", using: :btree
  end

  create_table "conversations", force: :cascade do |t|
    t.integer  "user_one_id", null: false
    t.integer  "user_two_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "from_id",    null: false
    t.integer  "to_id",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["from_id", "to_id"], name: "index_likes_on_from_id_and_to_id", unique: true, using: :btree
    t.index ["to_id"], name: "index_likes_on_to_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "thread_id",  null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_messages_on_author_id", using: :btree
    t.index ["body"], name: "index_messages_on_body", using: :btree
    t.index ["thread_id"], name: "index_messages_on_thread_id", using: :btree
  end

  create_table "questions", force: :cascade do |t|
    t.text     "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.integer  "answer_id",                       null: false
    t.integer  "user_id",                         null: false
    t.string   "acceptable_answers", default: [], null: false, array: true
    t.integer  "importance"
    t.text     "explanation"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["answer_id"], name: "index_responses_on_answer_id", using: :btree
    t.index ["user_id"], name: "index_responses_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "password_digest",    null: false
    t.string   "session_token",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.text     "summary"
    t.text     "message_if"
    t.integer  "prof_pic_id"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "discipline",         null: false
    t.string   "indoorsoutdoors",    null: false
    t.string   "location",           null: false
    t.string   "email",              null: false
    t.integer  "age",                null: false
    t.index ["discipline"], name: "index_users_on_discipline", using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["indoorsoutdoors"], name: "index_users_on_indoorsoutdoors", using: :btree
    t.index ["location"], name: "index_users_on_location", using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
