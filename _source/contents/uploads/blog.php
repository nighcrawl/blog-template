<?php
/*
Template Name: Blog Template
*/
?>
<?php get_header(); ?>
<!-- feature here -->

<div id="wrapper">
	<div id="maincontent">
    	<div id="posts">
			<?php if (have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                <h1 id="<?php echo str_replace('/','',str_replace(get_bloginfo('url').'/','',get_permalink()));?>_header"><?php the_title(); ?></h1>
                <span class="postmetadata">
                	<?php edit_post_link('(Modifier)', '', ''); ?>  
                </span>
                <?php endwhile; ?>
            <?php endif; ?>
            <?php query_posts('cat=-3'); ?>
            <?php if(have_posts()) : ?>
                <?php while (have_posts()) : the_post(); ?>
                    <div class="post"  id="post-<?php the_ID(); ?>">
                        <img alt="<?php the_title(); ?>" class="post_img" src="
                        <?php
						if(get_post_custom_values('img_article',$post->ID))
						{
						$custom_illu = get_post_custom_values('img_article', $post->ID);
						$illu = $custom_illu[0];
						}
						else
						{
						$illu = bloginfo('stylesheet_directory').'/images/img_post.png';
						}
						?>
						<?php echo $illu; ?>
                        " />
                        <div class="post_text">
                          <h2><a href="<?php the_permalink() ?>" rel="bookmark" title="Lien permanent vers <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
                          <span class="postmetadata">
							  <?php the_time('j F Y') ?> dans <?php the_category(', ') ?> 
                              <?php edit_post_link('(Modifier)', '', ''); ?>  
                              <?php comments_popup_link('Aucun commentaire »', '1 commentaire »', '% commentaires »', 'comments-link', 'Les commentaires sont fermés'); ?>
                          </span>
                            <?php the_content('Lire la suite'); ?>
                        </div>
                    </div>
				<?php endwhile; ?>
            <?php else : ?>
                <h2 class="center">Introuvable</h2>
                <p class="center">Désolé, mais vous cherchez quelque chose qui ne se trouve pas ici.</p>
                <?php get_search_form(); ?>
            <?php endif; ?>
        </div>
        <?php get_sidebar(); ?>
    </div>
</div>
<?php get_footer(); ?>