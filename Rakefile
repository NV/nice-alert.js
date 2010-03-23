require 'rake/clean'
require 'jspp'
require 'colored'

CLOBBER.include 'chrome/nice_alert.js'

task :chrome do
  file = JSPP 'chrome.js'
  File.open 'chrome/nice_alert.js', 'w' do |f|
    f.puts file
  end
  puts '+ chrome/nice_alert.js'.green
end
