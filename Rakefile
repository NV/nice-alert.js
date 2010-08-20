require 'rake/clean'
require 'jspp'
require 'colored'

CLOBBER.include ['nice_alert.js', 'chrome/nice_alert.js', 'Nice Alert.safariextension/nice_alert.js']

task :userjs do
  file = JSPP 'src/userscript.js'
  File.open 'nice_alert.js', 'w' do |f|
    f.puts file
  end
  puts '+ nice_alert.js'.green
end

task :chrome do
  file = JSPP 'src/chrome.js'
  File.open 'chrome/nice_alert.js', 'w' do |f|
    f.puts file
  end
  puts '+ chrome/nice_alert.js'.green
end

task :safari do
  file = JSPP 'src/chrome.js'
  File.open 'Nice Alert.safariextension/nice_alert.js', 'w' do |f|
    f.puts file
  end
  puts '+ Nice Alert.safariextension/nice_alert.js'.green
end
