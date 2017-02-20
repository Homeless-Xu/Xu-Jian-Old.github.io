Gem::Specification.new do |s|
  s.name     = 'jekyll-theme-CMS'
  s.version  = '2.2.2'
  s.license  = 'MIT'
  s.summary  = 'Multi-level Filter: categories → tags → Posts → fileStructure ; 多级过滤: 大类 → 标签 → 文章 → 文章结构. '
  s.author   = 'Xu.Jian'
  s.email    = 'xx2610@gmail.com'
  s.homepage = 'https://www.0214.help'
  s.files    = `git ls-files -z`.split("\x0").grep(%r{^_(sass|includes|layouts)/})
end