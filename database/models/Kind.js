
 module.exports = (sequelize, DataTypes) => {
    const Kind = sequelize.define('Kind', {
        id: {
            type: DataTypes.STRING,
            
            primaryKey: true
        },
        user_flair_background_color: {
            type: DataTypes.STRING
        },
        submit_text_html: {
            type: DataTypes.STRING
        },
        restrict_posting: {
            type: DataTypes.BOOLEAN
        },
        user_is_banned: {
            type: DataTypes.STRING,
        },
        free_form_reports: {
            type: DataTypes.BOOLEAN,
        },
        wiki_enabled: {
            type: DataTypes.BOOLEAN,
        },
        user_is_muted: {
            type: DataTypes.STRING,
        },
        user_can_flair_in_sr: {
            type: DataTypes.STRING,
        },
        display_name: {
            type: DataTypes.STRING,
        },
        display_name_prefixed: {
            type: DataTypes.STRING,
        },
        public_traffic: {
            type: DataTypes.BOOLEAN,
        },
        subscribers: {
            type: DataTypes.INTEGER,
        },
        videostream_links_count: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        quarantine: {
            type: DataTypes.BOOLEAN,
        },
        hide_ads: {
            type: DataTypes.BOOLEAN,
        },
        prediction_leaderboard_entry_type: {
            type: DataTypes.STRING,
        },
        emojis_enabled: {
            type: DataTypes.BOOLEAN,
        },
        comment_score_hide_mins: {
            type: DataTypes.INTEGER,
        },
        allow_predictions: {
            type: DataTypes.BOOLEAN,
        },
        original_content_tag_enabled: {
            type: DataTypes.BOOLEAN,
        },
        community_reviewed: {
            type: DataTypes.BOOLEAN,
        },
        description_html: {
            type: DataTypes.STRING,
        },
        spoilers_enabled: {
            type: DataTypes.BOOLEAN,
        },
        allow_talks: {
            type: DataTypes.BOOLEAN,
        },
        user_flair_position: {
            type: DataTypes.STRING,
        },
        all_original_content: {
            type: DataTypes.BOOLEAN,
        },
        has_menu_widget: {
            type: DataTypes.BOOLEAN,
        },
        can_assign_user_flair: {
            type: DataTypes.BOOLEAN,
        },
        created: {
            type: DataTypes.INTEGER,
        },
        wls: {
            type: DataTypes.INTEGER,
        },
        show_media_preview: {
            type: DataTypes.BOOLEAN,
        },
        submission_type: {
            type: DataTypes.STRING,
        },
        created_utc: {
            type: DataTypes.INTEGER,
        },
        url: {
            type: DataTypes.STRING,
        },
        whitelist_status: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
        subreddit_type: {
            type: DataTypes.STRING,
        },
        link_flair_position: {
            type: DataTypes.STRING,
        },
        user_flair_type: {
            type: DataTypes.STRING,
        }, 
        title: {
            type: DataTypes.STRING,
        }, 
        header_img: {
            type: DataTypes.STRING,
        }, 
        icon_img: {
            type: DataTypes.STRING,
        },
        submit_text: {
            type: DataTypes.STRING,
        },
        banner_img: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'Kind',
        timestamps: true,
    });

    return Kind;
}