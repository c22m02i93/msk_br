import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('roles', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('description').nullable();
    table.timestamps(true, true);
  });

  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('first_name');
    table.string('last_name');
    table.integer('role_id').unsigned().references('id').inTable('roles');
    table.boolean('is_active').defaultTo(true);
    table.timestamp('last_login');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('categories', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.integer('parent_id').unsigned().nullable().references('id').inTable('categories');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('tags', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('slug').notNullable().unique();
    table.timestamps(true, true);
  });

  await knex.schema.createTable('seo_meta', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.text('description');
    table.json('schema');
    table.string('slug').notNullable().unique();
    table.timestamps(true, true);
  });

  await knex.schema.createTable('media', (table) => {
    table.uuid('id').primary();
    table.string('filename').notNullable();
    table.string('original_name').notNullable();
    table.string('mime_type').notNullable();
    table.integer('size').unsigned().notNullable();
    table.string('url').notNullable();
    table.json('variants');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('excerpt');
    table.text('content', 'longtext');
    table.integer('category_id').unsigned().references('id').inTable('categories');
    table.integer('author_id').unsigned().nullable();
    table.uuid('cover_media_id').nullable().references('id').inTable('media');
    table.boolean('is_published').defaultTo(false);
    table.timestamp('published_at');
    table.integer('seo_id').unsigned().nullable().references('id').inTable('seo_meta');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('post_tags', (table) => {
    table.increments('id').primary();
    table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('CASCADE');
    table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE');
  });

  await knex.schema.createTable('pages', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('content', 'longtext');
    table.boolean('is_published').defaultTo(false);
    table.timestamp('published_at');
    table.integer('seo_id').unsigned().nullable().references('id').inTable('seo_meta');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('menus', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('slug').notNullable().unique();
    table.timestamps(true, true);
  });

  await knex.schema.createTable('menu_items', (table) => {
    table.increments('id').primary();
    table.integer('menu_id').unsigned().references('id').inTable('menus').onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('url').notNullable();
    table.integer('parent_id').unsigned().nullable().references('id').inTable('menu_items');
    table.integer('order').defaultTo(0);
    table.boolean('is_active').defaultTo(true);
    table.timestamps(true, true);
  });

  await knex.schema.createTable('galleries', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.integer('seo_id').unsigned().nullable().references('id').inTable('seo_meta');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('gallery_items', (table) => {
    table.increments('id').primary();
    table.integer('gallery_id').unsigned().references('id').inTable('galleries').onDelete('CASCADE');
    table.uuid('media_id').references('id').inTable('media');
    table.string('caption');
    table.integer('order').defaultTo(0);
    table.timestamps(true, true);
  });

  await knex.schema.createTable('documents', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.uuid('media_id').references('id').inTable('media');
    table.text('description');
    table.integer('seo_id').unsigned().nullable().references('id').inTable('seo_meta');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('events', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.dateTime('start_at');
    table.dateTime('end_at');
    table.string('location');
    table.integer('seo_id').unsigned().nullable().references('id').inTable('seo_meta');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('schedules', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('slug').notNullable().unique();
    table.text('description');
    table.json('items');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('contact_messages', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('subject');
    table.text('message');
    table.boolean('processed').defaultTo(false);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists('contact_messages')
    .dropTableIfExists('schedules')
    .dropTableIfExists('events')
    .dropTableIfExists('documents')
    .dropTableIfExists('gallery_items')
    .dropTableIfExists('galleries')
    .dropTableIfExists('menu_items')
    .dropTableIfExists('menus')
    .dropTableIfExists('pages')
    .dropTableIfExists('post_tags')
    .dropTableIfExists('posts')
    .dropTableIfExists('media')
    .dropTableIfExists('seo_meta')
    .dropTableIfExists('tags')
    .dropTableIfExists('categories')
    .dropTableIfExists('users')
    .dropTableIfExists('roles');
}
