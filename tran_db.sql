-- -------------------------------------------------------------
-- TablePlus 4.6.8(424)
--
-- https://tableplus.com/
--
-- Database: tran_db
-- Generation Time: 2022-08-30 23:03:09.9390
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.



-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type


INSERT INTO "public"."_prisma_migrations" ("id", "checksum", "finished_at", "migration_name", "logs", "rolled_back_at", "started_at", "applied_steps_count") VALUES
('647c89b8-1828-4fae-adde-130fe7954a61', 'cbfe53c74754c037af5b8f3d07c70ca0cf4bd864d99de3ecaa1768225b152386', '2022-08-30 21:55:33.56956+00', '20220830215533_last', NULL, NULL, '2022-08-30 21:55:33.497572+00', 1);

INSERT INTO "public"."User" ("id", "token_42_api", "username", "avatar", "email", "phone", "token_google_auth", "token_sms_api", "losses", "wins", "ladder_level") VALUES
(1, 'token42tfghfghgfhgfhfghghFFDFD', 'Soukaina', 'ava', 'ssghuri@student.1337.ma', 2445144, NULL, NULL, 0, 0, 0),
(2, 'token4244444444444', 'Hamza', 'ava', 'hchorfi@student.1337.ma', 25544, NULL, NULL, 0, 0, 0),
(3, 'token333', 'Safa', 'ava', 'sbarka@student.1337.ma', 255442, NULL, NULL, 0, 0, 0),
(4, 'token42tf', 'Brahim', 'ava', 'brahim@student.1337.ma', 2445144, NULL, NULL, 0, 0, 0);

INSERT INTO "public"."Room" ("id", "name", "type", "password", "owner") VALUES
(1, 'room1', 'public', '$argon2id$v=19$m=4096,t=3,p=1$QoWI8zXbN5wB/OMQaKJkqg$08UMGrQTepDkeopG5PSFE0QOy4CfvD7vKfocC9o3vuM', 'Hamza'),
(2, 'filles', 'public', '$argon2id$v=19$m=4096,t=3,p=1$TUpEcwwP46bEdsDksFsz4A$NeDU4leacdAIECQZlcevsRi2XzG5sxxgB9vBNcpwI2U', 'Hamza'),
(3, 'testqq', 'protected', '$argon2id$v=19$m=4096,t=3,p=1$Dp7oWGcbc9UYCjjufruP1A$U+CfxRTyDst9Lc5YCm0aOC/+pKh2OBQE+YOsCImBDns', 'Hamza');

INSERT INTO "public"."MessageRoom" ("id", "creationDate", "from", "room_name", "content_msg") VALUES
(1, '2022-08-30 21:59:06.134', 'Hamza', 'room1', 'hii'),
(2, '2022-08-30 21:59:34.752', 'Soukaina', 'room1', 'hellooo'),
(3, '2022-08-30 21:59:46.285', 'Hamza', 'room1', 'how are you?'),
(4, '2022-08-30 21:59:53.471', 'Soukaina', 'room1', 'i''m fine you??/'),
(5, '2022-08-30 22:00:24.658', 'Safa', 'room1', 'yes'),
(6, '2022-08-30 22:00:30.503', 'Safa', 'room1', 'toooooppp'),
(7, '2022-08-30 22:00:35.353', 'Hamza', 'room1', 'yeeesss'),
(8, '2022-08-30 22:00:39.664', 'Soukaina', 'room1', 'poooooo');





INSERT INTO "public"."Users_room" ("id", "user_id", "user_role", "room_id", "state_user") VALUES
(1, 'Hamza', 'owner', 'room1', ''),
(2, 'Hamza', 'owner', 'filles', ''),
(3, 'Hamza', 'owner', 'testqq', ''),
(4, 'Soukaina', 'user', 'room1', ''),
(5, 'Safa', 'user', 'room1', '');

ALTER TABLE "public"."DirectMessage" ADD FOREIGN KEY ("from") REFERENCES "public"."User"("username") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."DirectMessage" ADD FOREIGN KEY ("to") REFERENCES "public"."User"("username") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."Friendship" ADD FOREIGN KEY ("id_user_2") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."Friendship" ADD FOREIGN KEY ("id_user_1") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."Invitationfriend" ADD FOREIGN KEY ("id_user_invit_to") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."Invitationfriend" ADD FOREIGN KEY ("id_user_invited") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."match_history" ADD FOREIGN KEY ("winner_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."match_history" ADD FOREIGN KEY ("loser_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."MessageRoom" ADD FOREIGN KEY ("room_name") REFERENCES "public"."Room"("name") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."MessageRoom" ADD FOREIGN KEY ("from") REFERENCES "public"."User"("username") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."Room" ADD FOREIGN KEY ("owner") REFERENCES "public"."User"("username") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."UserAchiev" ADD FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."UserAchiev" ADD FOREIGN KEY ("achie_id") REFERENCES "public"."Achievement"("achiev_id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."Users_room" ADD FOREIGN KEY ("user_id") REFERENCES "public"."User"("username") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."Users_room" ADD FOREIGN KEY ("room_id") REFERENCES "public"."Room"("name") ON DELETE CASCADE ON UPDATE CASCADE;
