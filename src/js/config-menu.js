var menu_template = `
	<ul>
		<li>
			<a class="trn" href="#">打开</a>
			<ul>
				<li><a class="trn" data-target="file/new.new" href="#">新建</a></li>
				<li><div class="mid-line"></div></li>
				<li class="more">
					<a class="trn" href="#">打开文件</a>
					<ul>
					<li><a class="trn dots" data-target="file/open.open_file" data-key="Drag&Drop" href="#">打开一个文件</a></li>
					<li><a class="trn dots" data-target="file/open.open_dir" href="#">打开目录</a></li>
					<li><a class="trn dots" data-target="file/open.open_webcam" href="#">Open from Webcam</a></li>
					<li><a class="trn dots" data-target="file/open.open_url" href="#">Open URL</a></li>
					<li><a class="trn dots" data-target="file/open.open_data_url" href="#">Open Data URL</a></li>
					<li><a class="trn dots" data-target="file/open.open_template_test" href="#">Open test template</a></li>
					</ul>
				</li>
				<li><a class="trn dots" data-target="file/search.search" href="#">Search images</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="file/save.save" data-key="S" href="#">Save as</a></li>
				<li><a class="trn dots" data-target="file/save.save_data_url" href="#">Save as data URL</a></li>
				<li><a class="trn dots" data-target="file/print.print" data-key="Ctrl-P" href="#">Print</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="file/quicksave.quicksave" data-key="F9" href="#">Quick save</a></li>
				<li><a class="trn" data-target="file/quickload.quickload" data-key="F10" href="#">Quick load</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">图像</a>
			<ul>
				<li><a class="trn dots" data-target="image/information.information" href="#">Information</a></li>
				<li><a class="trn dots" data-target="image/size.size" href="#">Size</a></li>
				<li><a class="trn dots" data-target="image/trim.trim" data-key="T" href="#">Trim</a>
				<li class="more">
					<a class="trn" href="#">Zoom</a>
					<ul>
						<li><a class="trn" data-target="image/zoom.in" href="#">Zoom In</a></li>
						<li><a class="trn" data-target="image/zoom.out" href="#">Zoom Out</a></li>
						<li><div class="mid-line"></div></li>
						<li><a class="trn" data-target="image/zoom.original" href="#">Original size</a></li>
						<li><a class="trn" data-target="image/zoom.auto" href="#">Fit window</a></li>
					</ul>
				</li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/resize.resize" href="#">Resize</a></li>
				<li><a class="trn dots" data-target="image/rotate.rotate" href="#">Rotate</a></li>
				<li class="more">
					<a class="trn" href="#">Flip</a>
					<ul>
						<li><a class="trn" data-target="image/flip.vertical" href="#">Vertical</a></li>
						<li><a class="trn" data-target="image/flip.horizontal" href="#">Horizontal</a></li>
					</ul>
				</li>
				<li><a class="trn dots" data-target="image/translate.translate" href="#">Translate</a></li>
				<li><a class="trn dots" data-target="image/opacity.opacity" href="#">Opacity</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/color_corrections.color_corrections" href="#">Color corrections</a></li>
				<li><a class="trn" data-target="image/auto_adjust.auto_adjust" href="#">Auto adjust colors</a></li>
				<li><a class="trn" data-target="image/decrease_colors.decrease_colors" href="#">Decrease color depth</a></li>
				<li><a class="trn dots" data-target="image/palette.palette" href="#">Color palette</a></li>
				<li><a class="trn dots" data-target="image/grid.grid" data-key="G" href="#">Grid</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="image/histogram.histogram" data-key="H" href="#">Histogram</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">图层</a>
			<ul>
				<li><a class="trn" data-target="layer/new.new" data-key="N" href="#">New</a></li>
				<li><a class="trn" data-target="layer/new.new_selection" href="#">New from selection</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="layer/duplicate.duplicate" href="#">Duplicate</a></li>
				<li><a class="trn" data-target="layer/visibility.toggle" href="#">Show / Hide</a></li>
				<li><a class="trn" data-target="layer/delete.delete" href="#">Delete</a></li>
				<li><a class="trn" data-target="layer/raster.raster" href="#">Convert to raster</a></li>
				<li><div class="mid-line"></div></li>
				<li class="more">
					<a class="trn" href="#">Move</a>
					<ul>
						<li><a class="trn" data-target="layer/move.up" href="#">Up</a></li>
						<li><a class="trn" data-target="layer/move.down" href="#">Down</a></li>
					</ul>
				</li>
				<li><a class="trn dots" data-target="layer/composition.composition" href="#">Composition</a></li>
				<li><a class="trn dots" data-target="layer/rename.rename" href="#">Rename</a></li>
				<li><a class="trn" data-target="layer/clear.clear" href="#">Clear</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn" data-target="layer/differences.differences" href="#">Differences Down</a></li>
				<li><a class="trn" data-target="layer/merge.merge" href="#">Merge Down</a></li>
				<li><a class="trn" data-target="layer/flatten.flatten" href="#">Flatten Image</a></li>
			</ul>
		</li>
		<li>
			<a class="trn" href="#">工具</a>
			<ul>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="tools/borders.borders" href="#">Borders</a></li>
				<li><a class="trn" data-target="tools/sprites.sprites" href="#">Sprites</a></li>
				<li><a class="trn" data-target="tools/keypoints.keypoints" href="#">Key-points</a></li>
				<li><a class="trn dots" data-target="tools/content_fill.content_fill" href="#">Content fill</a></li>
				<li><div class="mid-line"></div></li>
				<li><a class="trn dots" data-target="tools/color_to_alpha.color_to_alpha" href="#">Color to alpha</a></li>
				<li><a class="trn dots" data-target="tools/color_zoom.color_zoom" href="#">Color Zoom</a></li>
				<li><a class="trn dots" data-target="tools/replace_color.replace_color" href="#">Replace Color</a></li>
				<li><a class="trn dots" data-target="tools/restore_alpha.restore_alpha" href="#">Restore alpha</a></li>
			</ul>
		</li>
		
	</ul>
`

export default menu_template
