files = Dir.entries('./SVG/WPZoom');
svgs = files.select { |file| file.end_with? '.svg' }

lines = ""
svgs.each do |svgFile|
	name = svgFile[0...-4]
	file = File.open "./SVG/WPZoom/#{svgFile}"

	camelName = []
	name.length.times do |i|
		char = name[i]
		if (char == '-')
		elsif (name[i - 1] == '-')
			camelName.push(char.upcase)
		else
			camelName.push(char)
		end
	end

	5.times{ file.gets }
	path = $_
	data = /"([0-9a-zA-Z. -]+)/.match(path)

	lines << "\t#{ camelName.join }: \"#{ data.to_a[1] }\",\n"
end

puts lines