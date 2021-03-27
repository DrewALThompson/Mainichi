User.destroy_all
Word.destroy_all
Userword.destroy_all

DATA = {
    :user_keys =>
      ["name", "password"],
    :users => [
        ["Drew", "quack"],
        ["Jose", "Jose"],
        ["Mike", "Mike"],
        ["Rachel", "Rachel"],
        ["怒龍", "Drew"],
        ["トレバー", "Trevor"]
    ],

    :word_keys =>
      ["jpname", "definition", "jpsentence", "engsentence", "category"],
    :words => [
        ['太陽', 'Sun', '太陽が熱いだね', 'The sun is hot!', 'n1'],
        ['水', 'Water', '水を飲みたい', 'I want to drink water.', 'n1'],
        ['目', 'Eye', '目を開く', 'To open eyes ', 'n1'],
        ['聞く', 'To hear', '声を聞けますか', 'Can you hear my voice?', 'n1'],
        ['面倒くさい', 'Annoying', '全部が面倒くさい', 'Everything is annoying', 'n2'],
        ['面接', 'Interview', '面接に行きました', 'I went to an interview', 'n2'],
        ['毛大する', 'Laziness, Negligent', '彼はずっと毛題します', 'He is always negligent!', 'n2'],
        ['季節', 'Season', '季節が夏になる', 'The season is changing into Summer', 'n2'],
        ['痛感する', 'To be aware of', '俺が気持ちを痛感します', 'I am aware of my feelings', 'n3'],
        ['結びつく', 'To be related to', '郊外は気候変動に結びつきます', 'Pollution is related to Climate Change', 'n3'],
        ['案外', 'Suddenly, Unexpectedly', '彼は案外太っています', 'He is unexpectedly becoming fat', 'n3']
    ],

    :userword_keys =>
      ["jpname", "definition", "jpsentence", "engsentence", 'user_id'],
    :userwords => [
        ['転音', 'Elision', 'コロラドの英語で「Mountain」というは、始まるの「ｎ」が転音です', 'In Mountain in Coloradan English, the first n is an elision.', 1],
        ['癇癪', 'Temper', '彼は癇癪がない', 'He does not have a temper', 1],
        ['激怒', 'To lose temper', 'ずっと激怒します', 'He is always loosing his temper', 1]
    ]
}

def main 
  make_users
  make_words
  make_userwords
end

def make_users
    DATA[:users].each do |user|
        new_user = User.new
        user.each_with_index do |attribute, i|
        new_user.send(DATA[:user_keys][i]+"=", attribute)
        end
        new_user.save
    end
end

def make_words
    DATA[:words].each do |word|
        new_word = Word.new
        word.each_with_index do |attribute, i|
        new_word.send(DATA[:word_keys][i]+"=", attribute)
        end
        new_word.save
    end
end

def make_userwords
    DATA[:userwords].each do |userword|
        new_userword = Userword.new
        userword.each_with_index do |attribute, i|
        new_userword.send(DATA[:userword_keys][i]+"=", attribute)
        end
        new_userword.save
    end
end

main