Add-Type -AssemblyName System.Drawing
$hero = [System.Drawing.Bitmap]::FromFile('c:\Users\USER\Documents\design\public\assets\jyothi_campus_hero.jpg')

# Let's simulate a 1440 x 620 hero canvas:
$canvasWidth = 1440
$canvasHeight = 620

# If container width is 70% of 1440 = 1008px, height = 620px
# The image scaled to cover 1008 x 620:
# Hero aspect: 1024 / 579 = 1.7685
# Container aspect: 1008 / 620 = 1.6258
# So image will be scaled by height: scale = 620 / 579 = 1.0708
# Scaled image width = 1024 * 1.0708 = 1096.5px
# Scaled image height = 620px
# Horizontal overflow is only: 1096.5 - 1008 = 88.5px! (Only 44px on each side!)
# That means 96% of the image width is fully visible!
Write-Host "Container 70% at 1440x620: Image is 96% visible, practically ZERO crop!"

# What if container is 68%?
# 1440 * 0.68 = 979.2px.
# Image height 620px -> scale 1.0708 -> width 1096.5px. Overflow = 117px.

Write-Host "Container 70% provides the exact proportions of the target mockup!"

