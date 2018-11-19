const init = (specifics) => {
	return {
		height: 300,
		plugins: [
		  '  wordcount advlist anchor autolink autosave charmap code codesample',
		  'directionality emoticons fullpage fullscreen help hr image imagetools insertdatetime link lists media',
		  'nonbreaking noneditable  print pagebreak paste preview save searchreplace table template',
		  ' textpattern toc visualblocks visualchars importcss tabfocus'
		],

		toolbar: " bold italic underline strikethrough subscript superscript blockquote |save undo redo restoredraft|fontselect fontsizeselect styleselect formatselect|link unlink| alignleft aligncenter alignright alignnone alignjustify|hr nonbreaking outdent indent  |visualblocks visualchars| ltr rtl "+
		"image media| numlist bullist | charmap | code codesample | forecolor backcolor emoticons | fullpage | fullscreen | anchor | insertdatetime  pagebreak template searchreplace toc tocupdate spellchecker help removeformat | cut copy paste | selectall remove ",
		...specifics
	};
};