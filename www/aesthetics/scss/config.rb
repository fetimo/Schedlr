# Delineate the directory for SASS/SCSS files
sass_path = File.dirname(__FILE__);
# Delineate the CSS dir
css_path = File.join(sass_path, '..', 'css')
# Delineate the images dir
images_dir = File.join(sass_path, '..', 'img')
# Load the Sencha Touch framework
load File.join(sass_path, '..', 'css')

output_style = :compressed
environment = :production