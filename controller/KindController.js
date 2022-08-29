var axios = require('axios');
const {Kind}=require('../database/models')

const llenar=async(req,res)=>{
    try {
       const datos= await axios.get('https://www.reddit.com/reddits.json')
       const alldatos=datos.data.data.children

        alldatos.map(async(ele)=>{
            
        await Kind.create({ 
            id:ele.data.id,
            user_flair_background_color:ele.data.user_flair_background_color,
            restrict_posting:ele.data.restrict_posting,
            submit_text_html:ele.data.submit_text_html,
            user_is_banned:ele.data.user_is_banned,
            free_form_reports:ele.data.free_form_reports,
            wiki_enabled:ele.data.wiki_enabled,
            user_is_muted:ele.data.user_is_muted,
            user_can_flair_in_sr:ele.data.user_can_flair_in_sr,
            display_name:ele.data.display_name,
            display_name_prefixed:ele.data.display_name_prefixed,
            public_traffic:ele.data.public_traffic,
            subscribers:ele.data.subscribers,
            videostream_links_count:ele.data.videostream_links_count,
            name:ele.data.name,
            quarantine:ele.data.quarantine,
            hide_ads:ele.data.hide_ads,
            prediction_leaderboard_entry_type:ele.data.prediction_leaderboard_entry_type,
            emojis_enabled:ele.data.emojis_enabled,
            comment_score_hide_mins:ele.data.comment_score_hide_mins,
            allow_predictions:ele.data.allow_predictions,
            original_content_tag_enabled:ele.data.original_content_tag_enabled,
            community_reviewed:ele.data.community_reviewed,
            description_html:ele.data.description_html,
            allow_talks:ele.data.allow_talks,
            user_flair_position:ele.data.user_flair_position,
            all_original_content:ele.data.all_original_content,
            has_menu_widget:ele.data.has_menu_widget,
            can_assign_user_flair:ele.data.can_assign_user_flair,
            created:ele.data.created,
            show_media_preview:ele.data.show_media_preview,
            submission_type:ele.data.submission_type,
            created_utc:ele.data.created_utc,
            url:ele.data.url,
            whitelist_status:ele.data.whitelist_status,
            description:ele.data.description,
            subreddit_type:ele.data.subreddit_type,
            link_flair_position:ele.data.link_flair_position,
            user_flair_type:ele.data.user_flair_type,
            title:ele.data.title,
            header_img:ele.data.header_img,
            icon_img:ele.data.icon_img,
            submit_text:ele.data.submit_text,
            banner_img:ele.data.banner_img,
            });
       })


       return res.json('llenado')
        
    } catch (error) {
        console.log(error)
        
    }
    

}
const mostrar=async(req,res)=>{
    try {
        const alldata=await Kind.findAll({})
    res.json(alldata)
        
    } catch (error) {
        console.log(error)
        
    }
    

}
module.exports={
    llenar,
    mostrar
}